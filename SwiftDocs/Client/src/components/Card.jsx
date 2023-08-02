import React, { useState, useEffect } from "react";
import files from "../assets/files.png";
import Users from "../assets/Users.png";
import Messages from "../assets/Messages.png";

const Card = ({ data }) => {
    const [ImagePath, setImagePath] = useState("");

    useEffect(() => {
        switch (data.path) {
            case "files":
                setImagePath(files);
                break;
            case "Users":
                setImagePath(Users);
                break;
            case "Messages":
                setImagePath(Messages);
                break;
            default:
                break;
        }
    }, [data.path]);

    return (
        <div>
            <div className="max-w-sm p-6 border rounded-lg shadow bg-gray-800border-gray-700">
                <img src={ImagePath} alt="image" className="h-8"/>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
                        {data.title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-400">
                    Hello{" "}
                    <span className="text-[#FF6600] text-xl">
                        {" "}
                        {data.Company}!
                    </span>
                    <br /> A warm welcome to SwiftDocs!. As of now, you have{" "}
                    <span className="text-[#FF6600] text-xl">{data.Qte}</span>{" "}
                    {data.description}
                </p>
                <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:underline"
                >
                    See our guideline
                    <svg
                        className="w-3 h-3 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Card;
