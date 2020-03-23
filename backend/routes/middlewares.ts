const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.json({ authenticated: false, msg: "로그인 해주세요." });
  }
};

const isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("Plz login");
  }
};

export { isLoggedIn, isNotLoggedIn };
