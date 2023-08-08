import React, { useRef, useEffect, useState } from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
import Typed from "typed.js";
import axios from "axios";
import "./Css/Form.css";

const UserSignUP = () => {
  const el = useRef(null);
  const [typedInstance, setTypedInstance] = useState(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Employee", " "],
      typeSpeed: 50,
      loop: true,
      backDelay: 1000,
    });

    setTypedInstance(typed);

    return () => {
      typed.destroy();
    };
  }, []);

  //   // Post to Database
  //   const [formData, setFormData] = useState({
  //     first_name: "",
  //     email: "",
  //     password: "",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     axios
  //       .post("http://localhost:8000/api/Employees", formData)
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //     .catch((error) => {
  //         console.log("Error status:", error.response.status);
  //         console.log("Error data:", error.response.data);
  //     });
  //   };

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      first_name: firstName,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/Employees",
        formData
      ); // Adjust the API endpoint as needed
      console.log(response.data); // Display the response from the server
    } catch (error) {
      console.error("Error:", error.response.data);
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
            <div className="form_details text-white ">Sign Up</div>
            <input
              type="text"
              className="input"
              placeholder="Full name"
              name="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="email"
              className="input"
              placeholder="Email"
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
            <button className="btn" type="submit">
              Sign up
            </button>
            <span className="switch text-gray-500">
              Already have an account?{" "}
              <a href="/login" className="signup_tog text-white">
                Login
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignUP;
