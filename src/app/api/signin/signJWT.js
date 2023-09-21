import jwt from "jsonwebtoken";

const secret = process.env.jwtsecret; // Replace with your actual secret key
const defaultExpiresIn = "1h"; // Default expiration is 1 hour

export const signToken = async (payload, expiresIn = defaultExpiresIn) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, { expiresIn }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });
};

export const verifyToken = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        reject(new Error("Token is invalid or expired"));
      } else {
        resolve(decoded);
      }
    });
  });
};
