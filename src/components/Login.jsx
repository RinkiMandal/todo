import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/ContextApi";
import toast from "react-hot-toast";

const Login = () => {
  const { logIn, isLogin, navigate, loading } = useStateContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isLogin) {
    return navigate("/");
  }

  const handleLogin = () => {
    if (email && password) {
      logIn(email, password);
    } else toast.error("Please enter details");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl mt-32">Login</h1>
      <div className="flex flex-col">
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="border-2 border-red-300 mt-10 w-72 h-12 rounded-md"
        />

        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="border-2 border-red-300 mt-10 w-72 h-12 rounded-md"
        />

        <div>
          <button
            type="submit"
            className="w-full mt-5 bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 outline-none"
            onClick={handleLogin}
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </div>
      </div>
      <NavLink
        to="/register"
        className="m-8 text-xl font-medium cursor-pointer"
      >
        u don't have account? <span className="text-red-600"> Register</span>{" "}
      </NavLink>
    </div>
  );
};

export default Login;
