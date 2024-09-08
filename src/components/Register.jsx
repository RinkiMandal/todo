import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/ContextApi";

const Login = () => {
  const { RegisterUser, isLogin, navigate, loading } = useStateContext();

  if (isLogin) {
    navigate("/");
    return null;
  }

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    RegisterUser(formData);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl mt-32">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Name"
          className="border-2 border-red-300 mt-10 w-72 h-12 rounded-md"
        />

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border-2 border-red-300 mt-10 w-72 h-12 rounded-md"
        />

        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="border-2 border-red-300 mt-10 w-72 h-12 rounded-md"
        />

        <div>
          <button
            type="submit"
            className="w-full mt-5 bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 outline-none"
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </div>
      </form>
      <NavLink to="/login" className="m-8 text-xl font-medium cursor-pointer">
        Already have an account? <span className="text-red-600">Login</span>
      </NavLink>
    </div>
  );
};

export default Login;
