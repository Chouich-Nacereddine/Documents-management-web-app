import React, { useRef, useEffect, useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import Typed from "typed.js";
import "./Css/Form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CompanieSignUP = () => {
  const navigate = useNavigate();
  const el = useRef(null);

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
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [company_contact, setCompany_contact] = useState("");
  const [headquarters, setHeadquarters] = useState("");
  const [ceo_founder, setCeo_founder] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      company_name: company_name,
      industry: industry,
      description: description,
      company_contact: company_contact,
      headquarters: headquarters,
      ceo_founder: ceo_founder,
      email: email,
      password: password,
    };

    // console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/Register",
        formData
      ); // Adjust the API endpoint as needed
      console.log(response.data); // Display the response from the server
      alert("Success alert!  Your signup was successful. You will be redirected to the login page.");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error.response.data);
      console.log(error);
    }
  };

  return (
      <div className="sm:w-[50vw] h-[88vh] flex flex-col">
        <div className="absolute slideInDown flex self-start top-[50%] text-8xl text-[#FF6600] animate-bounce">
          <AiOutlineCaretRight />
        </div>
        <div className="flex justify-center">
          <h2 className="text-white text-3xl py-6 font-semibold">
            I'm a <span className="text-red-600" ref={el} />
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-[#FF6600]"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="...."
                  value={company_name}
                  name="company_name"
                  onChange={(e) => setCompany_name(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="last_name"
                  className="block mb-2 text-sm font-medium text-[#FF6600]"
                >
                  Industry
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="IT for example ..."
                  value={industry}
                  name="industry"
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="company"
                  className="block mb-2 text-sm font-medium text-[#FF6600]"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="company"
                  className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="Short description"
                  value={description}
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="phone"
                  className="block mb-2 text-sm font-medium text-[#FF6600]"
                >
                  Contact
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="123-45-678"
                  // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  value={company_contact}
                  name="company_contact"
                  onChange={(e) => setCompany_contact(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="website"
                  className="block mb-2 text-sm font-medium text-[#FF6600]"
                >
                  Headquarters
                </label>
                <input
                  type="text"
                  id="website"
                  className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="Morocco/Fes"
                  value={headquarters}
                  name="headquarters"
                  onChange={(e) => setHeadquarters(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="visitors"
                  className="block mb-2 text-sm font-medium text-[#FF6600]"
                >
                  Ceo Founder
                </label>
                <input
                  type="text"
                  id="visitors"
                  className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="...."
                  value={ceo_founder}
                  name="ceo_founder"
                  onChange={(e) => setCeo_founder(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-[#FF6600]"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                placeholder="Ceo.founder@company.com"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-[#FF6600]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                placeholder="•••••••••"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                for="confirm_password"
                className="block mb-2 text-sm font-medium text-[#FF6600]"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirm_password"
                className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                placeholder="•••••••••"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
  );
};

export default CompanieSignUP;