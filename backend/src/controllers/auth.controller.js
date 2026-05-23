import userModel from "../models/user.model.js";



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

  // create user in database
  const user = await userModel.create({
    username,
    email,
    password
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