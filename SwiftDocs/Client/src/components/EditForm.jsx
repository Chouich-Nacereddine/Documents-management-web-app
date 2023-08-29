import React, { useEffect, useState } from "react";
import axios from "axios";

const EditForm = ({ file }) => {
  const [prevFileName, setPrevFileName] = useState("");
  // console.log(file)
  const [fileData, setFileData] = useState({
    File_Name: "",
    Physical_location: "",
    Folder_location: "",
    Description: "",
  });

  useEffect(() => {
    const storedFileData = file;
    if (storedFileData) {
      setFileData(storedFileData);
      setPrevFileName(storedFileData.File_Name);
      // console.log("fileData updated ", fileData)
    }
  }, [file]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("updated data", fileData);

    try {
      const response = await axios.put(
        "http://localhost:8000/api/File_update",
        fileData
      );

      console.log("Server 'laravel' Response:", response.data);
      try {
        const newFileName = fileData.File_Name;
        const res = await axios
          .put(`http://localhost:5000/rename/${prevFileName + ".pdf"}`, {
            newFileName,
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error renaming file:", error.response.data);
          });
      } catch (error) {
        console.error("Error:", error.response.data);
      }
      alert(response.data.message);
    } catch (error) {
      console.error("Error:", error.response.data);
    }

    // console.log("Previous File Name is :", prevFileName)
    // console.log("Edited File Name is :", fileData.File_Name)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
              className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="John"
              name="File_Name"
              value={fileData.File_Name}
              onChange={handleInputChange}
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
              className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="Doe"
              name="Physical_location"
              value={fileData.Physical_location}
              onChange={handleInputChange}
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
              className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="Flowbite"
              name="Folder_location"
              value={fileData.Folder_location}
              onChange={handleInputChange}
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
              type="text"
              className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="Description"
              name="Description"
              value={fileData.Description}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save All
        </button>
      </form>
    </div>
  );
};

export default EditForm;
