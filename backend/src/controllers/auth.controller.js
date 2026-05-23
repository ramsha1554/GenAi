export const registerUserController = (req, res) => {

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters"
    });
  }

  res.status(201).json({
    success: true,
    message: "Validation successful",
    user: {
      username,
      email
    }
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