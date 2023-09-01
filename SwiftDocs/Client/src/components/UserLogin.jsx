import React, { useRef, useEffect, useState } from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
import Typed from "typed.js";
import "./Css/Form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const UserLogin = () => {
  const navigate = useNavigate();
  const el = useRef(null);
  const { login } = useAuth(); // Get the login function from useAuth

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Employee", " "],
      typeSpeed: 50,
      loop: true,
      backDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const [First_name, setFirst_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      First_name: First_name,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/Employee/login",
        formData
      );
      if (!response || !response?.data?.token)
        throw Error("Invalid Credentials");

      const { token, employee } = response.data;
      // console.log("response.data", response.data)

      login(token);
      // Store the token in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("employee", JSON.stringify(employee));
      // console.log('Employee',employee , "token", token);

      alert("Welcome back to SwiftDocs! You have been successfully logged in.");
      // console.log(response.data);
      response.data.employee.IsAdmin
        ? navigate("/Admin_dashboard")
        : navigate("/Employee_dashboard");
    } catch (error) {
      console.error("Error:", error); // Log the entire error object
      setErrorMessage("Login incorrect");
    }
  };

  return (
    <div className="sm:w-[50vw] h-[88vh] bg-[#FF6600] flex flex-col">
      <div className="absolute flex self-end top-[50%] text-8xl text-[#1D1F21] animate-bounce">
        <AiOutlineCaretLeft />
      </div>
      <div className="flex justify-center">
        <h2 className="text-white text-3xl py-6 font-semibold">
          I'm an <span className="text-red-600" ref={el} />
        </h2>
      </div>

      <div className="flex justify-center items-center">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form_front w-full">
            <div className="form_details text-white ">Login</div>
            <input
              type="text"
              className="input"
              placeholder="Company"
              name="First_name"
              value={First_name}
              onChange={(e) => setFirst_name(e.target.value)}
            />
            <input
              type="text"
              className="input"
              placeholder="Username or Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && <div className="error">{errorMessage}</div>}
            <button className="btn" type="submit">
              Login
            </button>
            <span className="switch text-gray-500">
              Don't have an account?{" "}
              <a href="/sign-up" className="signup_tog text-white">
                Sign Up
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
