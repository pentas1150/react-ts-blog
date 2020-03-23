import { PassportStatic } from "passport";
import { localStrategy } from "./localStrategy";
import { User } from "../models/User";

export const passportConfig = (passport: PassportStatic) => {
  passport.serializeUser<any, any>((user, done) => {
    done(null, user.userId);
  });

  passport.deserializeUser<any, any>(async (id, done) => {
    try {
      const user = await User.findOne({ where: { userId: id } });
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  localStrategy(passport);
};
