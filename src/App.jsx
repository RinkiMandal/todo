import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import "./index.css";
import {  Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="">
<Toaster position="top-center" reverseOrder={false} />
        <Routes>
        {/* <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
        </Route> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />

        
        </Routes>

    </div>
  );
};

export default App;
