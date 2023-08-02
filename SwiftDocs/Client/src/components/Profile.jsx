import React from "react";

const Profile = () => {
    return (
        <div className="relative bg-blue-600 w-full h-full ">
            <div className=" p-10 absolute flex flex-col justify-center items-center w-full">
                <div>
                    <h1 className="text-2xl text-[#FF6600] pb-6">
                        Company name
                    </h1>
                </div>
                <div className="w-full bg-red-6 ">
                    <form>
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
                                    type="tel"
                                    id="phone"
                                    className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                                    placeholder="123-45-678"
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
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
                                    type="url"
                                    id="website"
                                    className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                                    placeholder="true/false"
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
