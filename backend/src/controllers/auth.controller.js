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