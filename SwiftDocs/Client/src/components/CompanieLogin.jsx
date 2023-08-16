import React, { useRef, useEffect, useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import Typed from "typed.js";
import "./Css/Form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const CompanieLogin = () => {
  const navigate = useNavigate();
  const el = useRef(null);
  const { login } = useAuth(); // Get the login function from useAuth

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Company", " "],
      typeSpeed: 50,
      loop: true,
      backDelay: 1000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const [company_name, setCompany_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      company_name: company_name,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        formData
      );
      if (!response || !response?.data?.token)
        throw Error("Invalid Credentials");

      const { token, company } = response.data;
      login(token);
      // Store the token in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("company", company);
      // console.log('company',company , "token", token)
      alert("Welcome back to SwiftDocs! You have been successfully logged in.");
      navigate("/Company_dashboard");
    } catch (error) {
      console.error("Error:", error); // Log the entire error object
      setErrorMessage("Login incorrect");
    }
  };

  return (
    <div className="sm:w-[50vw] h-[88vh] flex flex-col">
      <div className="absolute flex self-start top-[50%] text-8xl text-[#FF6600] animate-bounce">
        <AiOutlineCaretRight />
      </div>
      <div className="flex justify-center">
        <h2 className="text-white text-3xl py-6 font-semibold">
          I'm a <span className="text-red-600" ref={el} />
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form_front_Company w-full">
            <div className="form_details text-white ">Login</div>
            <input
              type="text"
              className="input"
              placeholder="Company"
              name="company_name"
              value={company_name}
              onChange={(e) => setCompany_name(e.target.value)}
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
            <span className="switch">
              Don't have an account?{" "}
              <a href="/sign-up" className="signup_tog">
                Sign Up
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanieLogin;
