import axios from "axios";
import React, { useEffect, useState } from "react";
import PDF from "../assets/pdf.png";
import editicon from "../assets/editicon.png";
import Download from "../assets/downloadPDF.png";
import "./Css/Card.css";
import EditForm from "./EditForm";

const FileSearch = () => {
  const [files, setFiles] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [editingFile, setEditingFile] = useState(null);

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

  // console.log("files", files);

  useEffect(() => {
    // Filter file names based on search term
    const filteredSuggestions = files.filter((file) =>
      file.File_Name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSuggestions(searchValue === "" ? files : filteredSuggestions);
  }, [searchValue, files]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className=" h-screen overflow-y-auto">
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
          </div>
          {suggestions.length > 0 && (
            <div className="flex justify-start items-center py-6 gap-6  w-[80vw]">
              {suggestions.map((file) => (
                <div key={file.id} className="card">
                  <div className="content">
                    <div className="back">
                      <div className="back-content">
                        <img src={PDF} alt="PDF" className="h-16" />
                        <strong>{file.File_Name}</strong>
                      </div>
                    </div>
                    <div className="front">
                      <div className="img">
                        <div className="circle"></div>
                        <div className="circle" id="right"></div>
                        <div className="circle" id="bottom"></div>
                      </div>

                      <div className="front-content">
                        <small className="badge">{file.Description}</small>
                        <div className="description">
                          <div className="title">
                            <p className="title">
                              <strong>
                                {file.IsValidat
                                  ? "Validated!"
                                  : "Not Validated!"}
                              </strong>
                            </p>
                          </div>
                          <p className="card-footer flex justify-end gap-4">
                            <img
                              src={editicon}
                              alt=""
                              className="h-6 cursor-pointer"
                              onClick={() => setEditingFile(file)}
                            />
                            <img
                              src={Download}
                              alt=""
                              className="h-6 cursor-pointer"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </form>
        <div className=" w-full">
          {editingFile && <EditForm file={editingFile} />}
        </div>
      </div>
    </div>
  );
};

export default FileSearch;
