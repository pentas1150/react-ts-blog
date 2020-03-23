import * as createError from "http-errors";
import * as express from "express";
import * as path from "path";
import * as cookieParser from "cookie-parser";
import * as session from "express-session";
import * as logger from "morgan";
import * as cors from "cors";
import * as passport from "passport";
import { passportConfig } from "./passport/index";
import sequelize from "./sequelize";
import "dotenv/config";

const indexRouter = require("./routes/index");

const app = express();
sequelize.sync();
passportConfig(passport);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  cors({
    origin: [process.env.DOMAIN, "http://localhost:3000"],
    credentials: true
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: process.env.SECRET_KEY,
    cookie: {
      maxAge: 60 * 1000,
      httpOnly: true,
      secure: false
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err, req: express.Request, res: express.Response, next: express.NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app
  .listen(8080, () => {
    console.log("app is running on 8080 port");
  })
  .on("error", (err: Error) => {
    console.error(err);
  });

module.exports = app;
