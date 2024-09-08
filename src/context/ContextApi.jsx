import axios from "../context/axios";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const tk = "bearer " + token;

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsLogin(true);
  };

  const RegisterUser = async (formData) => {
    try {
      setLoading(true);
      const response = await axios.post(`/users/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const logIn = async (email, password) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      navigate("/");
      handleLogin(data.token);
      toast.success(data.message);
    } catch (error) {
      setIsLogin(false);
      toast.error("Login failed. Please try again.");
    }
  };

  const value = {
    RegisterUser,
    isLogin,
    navigate,
    loading,
    logIn,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
