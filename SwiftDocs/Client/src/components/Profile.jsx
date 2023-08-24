import React, { useEffect, useState } from "react";
import axios from 'axios'

const Profile = () => {
    const companyAuth = localStorage.getItem("company")
    // console.log(companyAuth)

    const token = localStorage.getItem("token")
    // console.log(token)

    const [companyData, setCompanyData] = useState({
        company_name: "",
        industry: "",
        description: "",
        company_contact: "",
        headquarters: "",
        ceo_founder: "",
        email: "",
        password: "",
      });
    
      useEffect(() => {
        const storedCompanyData = JSON.parse(localStorage.getItem("company"));
        if (storedCompanyData) {
          setCompanyData(storedCompanyData);
        //   console.log("companyData updated ", companyData)
        }
      }, []);
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCompanyData((prevData) => ({
          ...prevData,
          [name]: value,
        }));

      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log('updated data',companyData)
        
        try {
            const response = await axios.put(
                "http://localhost:8000/api/Company_update",
                    companyData,
            );
    
            console.log("Server Response:", response.data);
            alert(response.data.message)
        } catch (error) {
            console.error("Error:", error.response.data);
            // Handle error cases, show error messages, etc.
        }
    };

    return (
        <div className="relative bg-blue-600 w-full h-full ">
            <div className=" p-10 absolute flex flex-col justify-center items-center w-full">
                <div>
                    <h1 className="text-2xl text-[#FF6600] pb-6">
                        Company name
                    </h1>
                </div>
                <div className="w-full bg-red-6 ">
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
                                    placeholder="John"
                                    name="company_name"
                                    value={companyData.company_name}
                                    onChange={handleInputChange}
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
                                    placeholder="Doe"
                                    name="industry"
                                    value={companyData.industry}
                                    onChange={handleInputChange}
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
                                    placeholder="Flowbite"
                                    name="description"
                                    value={companyData.description}
                                    onChange={handleInputChange}
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
                                    type="text"
                                    id="phone"
                                    className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                                    placeholder="123-45-678"
                                    name="company_contact"
                                    value={companyData.company_contact}
                                    onChange={handleInputChange}
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
                                    placeholder="true/false"
                                    name="headquarters"
                                    value={companyData.headquarters}
                                    onChange={handleInputChange}
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
                                    placeholder="Frontend dev"
                                    name="ceo_founder"
                                    value={companyData.ceo_founder}
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
                                value={companyData.email}
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
                                value={companyData.password}
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
        </div>
    );
};

export default Profile;