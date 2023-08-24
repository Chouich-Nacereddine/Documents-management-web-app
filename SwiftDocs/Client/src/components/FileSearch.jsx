import axios from "axios";
import React, { useEffect, useState } from "react";

const FileSearch = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/Files/getAll`);
        setFiles(res.data.files);
        // console.log("files", res.data.files);
      } catch (error) {
        console.error("Error fetching Files:", error);
      }
    };
    fetchFiles();
  }, []);

  console.log("files", files);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchValue(searchTerm);

    // Filter file names based on search term
    const filteredSuggestions = files.filter((file) =>
      file.File_Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };
  return (
    <div>
      <div className="w-full pt-6 px-20">
        <form>
          <label
            for="default-search"
            className="mb-2 text-sm font-medium sr-only text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
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
              className="block w-full p-4 pl-10 text-sm border  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search File..."
              value={searchValue}
              onChange={handleSearchChange}
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Search
            </button>
            {suggestions.length > 0 && (
              <ul className="mt-2 border border-gray-600 bg-gray-700 text-white rounded-lg absolute z-10 left-0 w-full">
                {suggestions.map((file) => (
                  <li
                    key={file.id}
                    className="p-2 cursor-pointer hover:bg-blue-600"
                  >
                    {file.File_Name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </form>
      </div>
      <div>
        <div className="flex justify-center p-10">
          <h1 className="text-3xl">File Edit</h1>
        </div>
        <form className="px-10 h-screen">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-[#FF6600]"
              >
                File name
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
                Physical location
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
                Folder name/location
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

export default FileSearch;
