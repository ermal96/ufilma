import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token || token === null) return res.status(401).send({ auth: false, message: "No token provided." });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, message: "Failed to authenticate token." });

    req.user = decoded;
    next();
  });
};
