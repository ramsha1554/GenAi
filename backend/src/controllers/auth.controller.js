import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import tokenBlacklistModel from "../models/blacklist.model.js";




export const registerUserController = async (req, res) => {

  const { username, email, password } = req.body;

  // check empty fields
  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  // check password length
  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters"
    });
  }

  // check existing user
  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists"
    });
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create user in database
  const user = await userModel.create({
    username,
    email,
    password: hashedPassword
  });

  // create jwt token
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  // store token in cookie
  res.cookie("token", token);

  // success response
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    token
  });

};





export const loginUserController = async (req, res) => {

  const { email, password } = req.body;

  // check empty fields
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  // find user
  const user = await userModel.findOne({ email });

  // check user exists
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User not found"
    });
  }

  // compare password
  const isPasswordMatch = await bcrypt.compare(
    password,
    user.password
  );

  // invalid password
  if (!isPasswordMatch) {
    return res.status(400).json({
      success: false,
      message: "Invalid password"
    });
  }

  // create token
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  // store cookie
  res.cookie("token", token);

  // success response
  res.status(200).json({
    success: true,
    message: "Login successful",
    token
  });

};





export const logoutUserController = async (req, res) => {

  // get token from cookie
  const token = req.cookies.token;

  // add token to blacklist
  if (token) {
    await tokenBlacklistModel.create({
      token
    });
  }

  // clear cookie
  res.clearCookie("token");

  // success response
  res.status(200).json({
    success: true,
    message: "Logout successful"
  });

};



export const getMeController = async (req, res) => {

  // find current user
  const user = await userModel.findById(req.user.id);

  // user not found
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  // success response
  res.status(200).json({
    success: true,
    user
  });

};

















// 1. bcrypt hashing
// 2. JWT token
// 3. cookie setup
// 4. login verification
// 5. logout
// 6. blacklist
// 7. auth middleware
// 8. getMe