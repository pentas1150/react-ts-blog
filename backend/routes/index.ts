import * as express from "express";
import { Router } from "express";
import * as passport from "passport";
import { isLoggedIn } from "./middlewares";
const router = Router();
import { User } from "../models/User";
import { Post } from "../models/Post";
import { Comment } from "../models/Comment";
import * as bcrypt from "bcryptjs";

router.get("/", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const list = await Post.findAll();

  res.json({ authenticated: true, postlist: list });
});

router.post("/signup", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const hasAdmin = await User.findAll();
    if (hasAdmin.length != 0) {
      return res.json({ authenticated: true, success: false, message: "가입할 수 없습니다." });
    }

    const hashpw = await bcrypt.hash(req.body.pw, 12);
    const result = await User.create({
      userId: req.body.id,
      userPw: hashpw
    });

    return res.json({ authenticated: true, success: true });
  } catch (err) {
    console.error(err);
    return res.json({ authenticated: true, success: false, message: err });
  }
});

router.post("/login", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      console.error(info.message);
      return res.send(info.message);
    }

    return req.login(user, loginError => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      console.log(req.user);
      return res.json({ authenticated: true, user: req.user, cookies: req.cookies });
    });
  })(req, res, next);
});

router.post("/upload", isLoggedIn, async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  //list.push({ id: idx++, title: req.body.title, content: req.body.content, author: "admin", createdAt: new Date(Date.now()).toLocaleString() });
  const result = await Post.create({
    title: req.body.title,
    content: req.body.content,
    author: req.session.passport.user
  });

  res.json({ authenticated: true });
});

router.get("/post/:id", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const post = await Post.findOne({ where: { id: req.params.id } });
  console.log(post);

  res.json({ authenticated: true, post: post });
});

router.get("/comment/:id", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const comments = await Comment.findAll({ attributes: ["comment", "commenter"], where: { post: req.params.id } });

  res.json({ authenticated: true, comment: comments });
});

router.post("/comment/:id", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const result = await Comment.create({
    comment: req.body.comment,
    commenter: req.body.commenter,
    post: req.params.id
  });

  res.json({ authenticated: true });
});

module.exports = router;
