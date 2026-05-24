import { useState } from "react";

import { useNavigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";

import axiosInstance from "../api/axios";

function Register() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await axiosInstance.post(
        "/auth/register",
        {
          username,
          email,
          password
        }
      );

      // redirect login page
      navigate("/login");

    } catch (error) {

      console.log(error.response.data);

    }

  };



  return (

    <AuthLayout>

      <h1>Register</h1>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />

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
          Register
        </button>

      </form>

    </AuthLayout>

  );

}

export default Register;