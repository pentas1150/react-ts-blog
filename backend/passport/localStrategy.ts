import { PassportStatic } from "passport";
import * as PassportLocal from "passport-local";
const LocalStrategy = PassportLocal.Strategy;
import * as bcrypt from "bcryptjs";
import { User } from "../models/User";

export const localStrategy = (passport: PassportStatic) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "id",
        passwordField: "pw"
      },
      async (id, pw, done) => {
        try {
          const exUser = await User.findOne({ where: { userId: id } });
          if (exUser) {
            const result = await bcrypt.compare(pw, exUser.userPw);
            if (result) {
              done(null, exUser);
            } else {
              done(null, false, { message: "비밀번호가 일치하지 않습니다." });
            }
          } else {
            done(null, false, { message: "가입되지 않은 회원입니다." });
          }
        } catch (err) {
          console.error(err);
          done(err);
        }
      }
    )
  );
};
