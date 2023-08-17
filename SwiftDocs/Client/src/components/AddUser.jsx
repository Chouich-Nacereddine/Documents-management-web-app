import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import axios from "axios";

const AddUser = () => {
  const [First_name, setFirst_name] = useState("");
  const [Last_name, setLast_name] = useState("");
  const [Gender, setGender] = useState("");
  const [Phone_number, setPhone_number] = useState("");
  const [IsAdmin, setIsAdmin] = useState();
  const [Position, setPosition] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleIsAdminChange = (e) => {
    const value = e.target.value.toLowerCase(); 
    setIsAdmin(value === 'true' || value === '1');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      First_name: First_name,
      Last_name: Last_name,
      Gender: Gender,
      Phone_number: Phone_number,
      IsAdmin: IsAdmin,
      Position: Position,
      email: email,
      password: password,
    };

    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/Employee/AddEmployee",
        formData
      );
      console.log(response.data); // Display the response from the server
      alert("Success alert! Employee account created successfully!");
    } catch (error) {
      console.error("Error:", error.response.data);
      console.log(error);
    }
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div className="w-100 flex justify-center">
        <h1 className="text-3xl p-10 flex gap-3">
          New User
          <FaUserPlus className="text-[#FF6600] " />
        </h1>
      </div>
      <form className="px-10 h-screen" onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-[#FF6600]"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="John"
              name="First_name"
              value={First_name}
              onChange={(e) => setFirst_name(e.target.value)}
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-[#FF6600]"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="Doe"
              name="Last_name"
              value={Last_name}
              onChange={(e) => setLast_name(e.target.value)}
            />
          </div>
          <div>
            <label
              for="company"
              className="block mb-2 text-sm font-medium text-[#FF6600]"
            >
              Gender
            </label>
            <input
              type="text"
              id="company"
              className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="Flowbite"
              name="Gender"
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div>
            <label
              for="phone"
              className="block mb-2 text-sm font-medium text-[#FF6600]"
            >
              Phone number
            </label>
            <input
              type="text"
              id="phone"
              className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="123-45-678"
              name="Phone_number"
              value={Phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
            />
          </div>
          <div>
            <label
              for="website"
              className="block mb-2 text-sm font-medium text-[#FF6600]"
            >
              IsAdmin
            </label>
            <input
              type="text"
              id="website"
              className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="true/false"
              name="IsAdmin"
              value={IsAdmin}
              onChange={handleIsAdminChange}
            />
          </div>
          <div>
            <label
              for="visitors"
              className="block mb-2 text-sm font-medium text-[#FF6600]"
            >
              Position
            </label>
            <input
              type="text"
              id="visitors"
              className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="Frontend dev"
              name="Position"
              value={Position}
              onChange={(e) => setPosition(e.target.value)}
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
            placeholder="john.doe@company.com"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
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
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
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
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddUser;
