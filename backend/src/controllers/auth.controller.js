import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

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

  // success response
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user
  });

};


export const loginUserController = (req, res) => {

  const { email, password } = req.body;

  // check empty fields
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  // success response
  res.status(200).json({
    success: true,
    message: "Login successful"
  });

};





export const logoutUserController = (req, res) => {

  res.status(200).json({
    success: true,
    message: "Logout successful"
  });

};