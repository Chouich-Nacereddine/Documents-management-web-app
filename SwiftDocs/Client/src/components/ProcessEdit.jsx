import React from "react";

const ProcessEdit = () => {
    return (
        <div className="h-screen overflow-y-auto">
            <div className="p-10">
                <form>
                    <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..."
                            required
                        />
                        <button
                            type="submit"
                            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <form className="px-10 h-screen">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label
                                for="first_name"
                                className="block mb-2 text-sm font-medium text-[#FF6600]"
                            >
                                Process name
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
                                Users Included
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
                                Process Manager
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
                                Description
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
                                Restriction
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
                                Prefix
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
    );
};

export default ProcessEdit;
