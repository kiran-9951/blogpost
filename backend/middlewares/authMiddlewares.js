const jwt = require("jsonwebtoken");

const verify = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Please provide a valid token" });
  }

  if (req.headers.authorization.startsWith("Bearer")) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, "secretKey123");
      req.user = decodedToken;
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token", error });
    }
  } else {
    return res
      .status(400)
      .json({ message: "access denied you don't have access token" });
  }
};

const restrict = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res
        .status(400)
        .json({ message: "access denied only admin  have access" });
    }
    next();
  };
};

module.exports ={verify,restrict}