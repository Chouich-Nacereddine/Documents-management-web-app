import React, { useEffect, useState } from "react";
import Profile from "../assets/Profile.webp";
import axios from "axios";


const UserProfile = () => {
  const employeeAuth = localStorage.getItem("employee");
  // console.log('employeeAuth', employeeAuth)

  const [employeeData, setEmployeeData] = useState({
    First_name: "",
    Last_name: "",
    Gender: "",
    Phone_number: "",
    IsAdmin: false,
    Position: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedEmployeeData = JSON.parse(employeeAuth);
    if (storedEmployeeData) {
      setEmployeeData(storedEmployeeData);
    }
  }, []);
  //   console.log("companyData updated ", employeeData)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("updated data", employeeData);

    try {
      const response = await axios.put(
        "http://localhost:8000/api/Employee_update",
        employeeData
      );

      console.log("Server Response:", response.data);
      alert(response.data.message);
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div className="bg-[#2c2e30]">
        <div className="flex justify-center pt-6">
          <img
            className="w-32 h-32 p-1 rounded-full ring-2 ring-[#FF6600]"
            src={Profile}
            alt="Bordered avatar"
          />
        </div>
        <div className="flex flex-col items-center py-6">
          <h2 className="text-xl">Welcome!</h2>
          <h1 className="text-2xl text-[#FF6600]">Name</h1>
        </div>
      </div>

      <div className="p-6 h-screen">
        <form onSubmit={handleSubmit}>
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
                value={employeeData.First_name}
                onChange={handleInputChange}
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
                value={employeeData.Last_name}
                onChange={handleInputChange}
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
                value={employeeData.Gender}
                onChange={handleInputChange}
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
                value={employeeData.Phone_number}
                onChange={handleInputChange}
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
                value={employeeData.IsAdmin ? "true" : "false"}
                onChange={handleInputChange}
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
                value={employeeData.Position}
                onChange={handleInputChange}
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
              value={employeeData.email}
              onChange={handleInputChange}
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
              value={employeeData.password}
              onChange={handleInputChange}
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
            Save all
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
