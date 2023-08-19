import React, { useState } from "react";
import { BsFileEarmarkArrowDownFill } from "react-icons/bs";
import axios from "axios";

const DropFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileContent, setSelectedFileContent] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;
        setSelectedFileContent(fileContent);
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile || !selectedFileContent) {
      alert("Please select a file.");
      return;
    }

    console.log('fileContent',selectedFileContent);
    console.log('fileContent',selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        {
          fileContent: selectedFileContent,
          file: {
            name: selectedFile.name,
            size: selectedFile.size,
            type: selectedFile.type,
          },
        }
      );

      if (response.status === 200) {
        alert("File uploaded successfully!");
        setSelectedFile(null);
        setSelectedFileContent(null);
      } else {
        alert("Error uploading file.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while uploading the file.");
    }
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div>
        <h1 className="flex gap-6 text-3xl justify-center pt-6">
          New File <BsFileEarmarkArrowDownFill className="text-[#FF6600]" />
        </h1>
      </div>
      <div className="p-10">
        <div className="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PDF, Excel, or Doc (Please make sure to choose one of the
                repositories below)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.xlsx,.docx"
            />
          </label>
        </div>
      </div>
      <div>
        <form className="px-10 h-screen" onSubmit={handleFormSubmit}>
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
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default DropFile;
