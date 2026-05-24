import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";

import axiosInstance from "../api/axios";

import { AuthContext } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axiosInstance.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      // save user globally
      setUser(response.data.user);

      // redirect dashboard
      navigate("/dashboard");

    } catch (error) {

      console.log(error.response.data);

    }

  };



  return (

    <AuthLayout>

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button type="submit">
          Login
        </button>

      </form>

    </AuthLayout>

  );

}

export default Login;


// "wrap Login page inside common auth structure"