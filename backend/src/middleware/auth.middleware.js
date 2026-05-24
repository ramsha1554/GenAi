import jwt from "jsonwebtoken";
import tokenBlacklistModel from "../models/blacklist.model.js";

export const authUser = async (req, res, next) => {

  // get token from cookies
  const token = req.cookies.token;

  // token missing
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token not found"
    });
  }

  // check blacklist
  const blacklistedToken = await tokenBlacklistModel.findOne({
    token
  });

  if (blacklistedToken) {
    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }

  try {

    // verify jwt
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // attach user to request
    req.user = decoded;

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Unauthorized access"
    });

  }

};



// 1. Read cookie
// 2. Check token exists
// 3. Check blacklist
// 4. Verify JWT
// 5. Attach user to req.user
// 6. Allow next route