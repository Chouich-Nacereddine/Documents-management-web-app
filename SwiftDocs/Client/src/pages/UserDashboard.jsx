import React, { useEffect, useState } from "react";
import UsersNavBody from "../components/dashboard/UsersNavBody";
import { CgLogOut } from "react-icons/cg";

import {
    UsersSidebarArray,
    SideBar,
    UserFirstNavBar,
    SecondeNavBarArray,
    SecondNavBar,
    ThirdNavBar,
} from "../components/js/Arrays";
import CompanyNavBody from "../components/dashboard/CompanyNavBody";
import Chat from "../components/Chat";
import AddUser from "../components/AddUser";
import DropFile from "../components/DropFile";
import FileSearch from "../components/FileSearch";
import FileValidation from "../components/FileValidation";
import UserProfile from "../components/UserProfile";

const UserDashboard = () => {
    const [UsersSideBar_activeIndex, setUsersSideBar_activeIndex] = useState(0);
    const UsersSideBar_handleSpanClick = (index) => {
        setUsersSideBar_activeIndex(index);
    };
    const [SideBar_activeIndex, setSideBar_activeIndex] = useState(0);

    const SideBar_handleSpanClick = (index) => {
        setSideBar_activeIndex(index);
    };
    const [FirstNavBar_activeIndex, setFirstNavBar_activeIndex] =
        useState(0);
    const FirstNavBar_handleSpanClick = (index) => {
        setFirstNavBar_activeIndex(index);
    };
    console.log(FirstNavBar_activeIndex);

    const data = {
        name: "James Smith",
    };

    return (
        <div className="pt-1 ">
            <div className="bg-[#1D1F21] text-white h-screen flex overflow-hidden text-sm ">
                <div className="h-screen ">
                    <div className="h-full bg-[#1D1F21] border-[#FF6600] w-20 flex-shrink-10 border-r flex-col hidden sm:flex">
                        <div className="h-16 text-[#FF6600] flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="50"
                                height="50"
                                viewBox="0 0 100 100"
                            >
                                <path
                                    fill="#fef6aa"
                                    d="M14,84c22,0.2,41-0.2,63.2-0.2c3.5-2.2,5.8-8.1,5.8-12.5V30.4c0-1.4-1.1-2.5-2.5-2.5H53.5 c-1.4,0-2.5-1.1-2.5-2.5v-2.3c0-3.4-2.8-6.2-6.3-6.2H17.3c-3.4,0-6.3,2.9-6.3,6.4v6.5L11.1,78C11.1,83,12.3,84,14,84z"
                                ></path>
                                <path
                                    fill="#1f212b"
                                    d="M15.5 32c-.3 0-.5-.2-.5-.5v-5c0-3.1 2.4-5.5 5.3-5.5h18.2c.3 0 .5.2.5.5S38.8 22 38.5 22H20.3C18 22 16 24 16 26.5v5C16 31.7 15.8 32 15.5 32zM46.5 27c-.3 0-.5-.2-.5-.5 0-2.5-2-4.5-4.3-4.5-.3 0-.5-.2-.5-.5s.2-.5.5-.5c2.9 0 5.3 2.5 5.3 5.5C47 26.8 46.8 27 46.5 27z"
                                ></path>
                                <path
                                    fill="#f9e65c"
                                    d="M13.8,84h71.2c1.7,0,3.1-1.4,3.1-3.1V37H16v37.8C16,79.9,16.3,84,13.8,84z"
                                ></path>
                                <path
                                    fill="#8f9eb6"
                                    d="M25.5 42.5H49.5V52.5H25.5z"
                                ></path>
                                <path
                                    fill="#1f212b"
                                    d="M49.5,53h-24c-0.3,0-0.5-0.2-0.5-0.5v-10c0-0.3,0.2-0.5,0.5-0.5h24c0.3,0,0.5,0.2,0.5,0.5v10 C50,52.8,49.8,53,49.5,53z M26,52h23v-9H26V52z"
                                ></path>
                                <path
                                    fill="#1f212b"
                                    d="M88,36h-4v-5.6c0-1.9-1.6-3.5-3.5-3.5H53.5c-0.8,0-1.5-0.7-1.5-1.5v-2.3c0-4-3.3-7.2-7.3-7.2H17.3 c-4,0-7.3,3.3-7.3,7.4L10.1,78c0,3.5,0.4,6.7,3.5,7c0,0,0.1,0,0.1,0H14c0.7,0,1.3,0,2,0v0h68.9c2.3,0,4.1-1.8,4.1-4.1V37 C89,36.4,88.6,36,88,36z M15,37v37.8l0,1.3c0,2.9,0,6-0.8,6.8C14.1,82.9,14,83,13.8,83c-0.7,0-1.7-0.5-1.7-5L12,29.8v-6.5 c0-3,2.4-5.4,5.3-5.4h27.5c2.9,0,5.3,2.3,5.3,5.2v2.3c0,1.9,1.6,3.5,3.5,3.5h27.1c0.8,0,1.5,0.7,1.5,1.5V36H16 C15.4,36,15,36.4,15,37z M87,80.9c0,1.1-0.9,2.1-2.1,2.1H16.4c0.6-1.6,0.6-4,0.6-7l0-38h70V80.9z"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4">
                            {SideBar.map((item, index) => (
                                <span
                                    Key={index}
                                    id={index}
                                    onClick={() =>
                                        SideBar_handleSpanClick(index)
                                    }
                                    className={`cursor-pointer rounded-md ${
                                        SideBar_activeIndex === index
                                            ? "text-[#FF6600] bg-gray-700 "
                                            : "" // Empty string if not active
                                    }`}
                                >
                                    {item.btn}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex-grow overflow-hidden h-full flex flex-col">
                    <div className="h-10 lg:flex w-full border-b border-[#FF6600] hidden px-10">
                        <div
                            className={`flex h-full text-gray-400 ${
                                SideBar_activeIndex !== 0 ? "hidden" : ""
                            }`}
                        >
                            {UserFirstNavBar.map((item, index) => (
                                <a
                                    key={index}
                                    onClick={() =>
                                        FirstNavBar_handleSpanClick(index)
                                    }
                                    className={`cursor-pointer h-full inline-flex items-center mr-8 ${
                                        FirstNavBar_activeIndex === index
                                            ? "border-b-2 text-white border-white w-[max-content]"
                                            : ""
                                    }`}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                        <div
                            className={`flex h-full text-gray-400 ${
                                SideBar_activeIndex !== 1 ? "hidden" : ""
                            }`}
                        >
                            {SecondNavBar.slice(0, 1).map((item, index) => (
                                <a
                                    key={index}
                                    onClick={() =>
                                        FirstNavBar_handleSpanClick(index)
                                    }
                                    className={`cursor-pointer h-full inline-flex items-center mr-8 ${
                                        FirstNavBar_activeIndex === index
                                            ? "border-b-2 text-white border-white w-[max-content]"
                                            : ""
                                    }`}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                        <div
                            className={`flex h-full text-gray-400 ${
                                SideBar_activeIndex !== 2 ? "hidden" : ""
                            }`}
                        >
                            {ThirdNavBar.slice(0,3).map((item, index) => (
                                <a
                                    key={index}
                                    onClick={() =>
                                        FirstNavBar_handleSpanClick(index)
                                    }
                                    className={`cursor-pointer h-full inline-flex items-center mr-8 ${
                                        FirstNavBar_activeIndex === index
                                            ? "border-b-2 text-white border-white w-[max-content]"
                                            : ""
                                    }`}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                        <div className="ml-auto flex items-center space-x-7">
                            <button className="h-8 px-3 rounded-md shadow text-white bg-blue-500 flex items-center">
                                <span className="mr-2">logout</span>{" "}
                                <CgLogOut />
                            </button>

                            <button className="flex items-center">
                                <span className="relative flex-shrink-0">
                                    <img
                                        className="w-7 h-7 rounded-full"
                                        src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                        alt="profile"
                                    />
                                    <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-gray-900"></span>
                                </span>
                                <span className="ml-2">{data.name}</span>
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-4 ml-1 flex-shrink-0"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* body */}
                    <div
                        className={`" ${
                            FirstNavBar_activeIndex !== 0 ||
                            SideBar_activeIndex !== 0
                                ? "hidden"
                                : ""
                        } "`}
                    >
                        <UserProfile
                            data={UsersSidebarArray[UsersSideBar_activeIndex]}
                        />
                    </div>
                    <div
                        className={`" ${
                            FirstNavBar_activeIndex !== 1 ||
                            SideBar_activeIndex !== 0
                                ? "hidden"
                                : ""
                        } "`}
                    >
                        <Chat
                            data={UsersSidebarArray[UsersSideBar_activeIndex]}
                        />
                    </div>

                    <div
                        className={`" ${
                            FirstNavBar_activeIndex !== 0 ||
                            SideBar_activeIndex !== 1
                                ? "hidden"
                                : ""
                        } "`}
                    >
                        <span className="flex justify-center items-center h-screen text-8xl">
                            Hierashy
                        </span>
                    </div>
                    <div
                        className={`" ${
                            FirstNavBar_activeIndex !== 0 ||
                            SideBar_activeIndex !== 2
                                ? "hidden"
                                : ""
                        } "`}
                    >
                        <DropFile />
                    </div>
                    <div
                        className={`" ${
                            FirstNavBar_activeIndex !== 1 ||
                            SideBar_activeIndex !== 2
                                ? "hidden"
                                : ""
                        } "`}
                    >
                        <FileSearch />
                    </div>
                    <div
                        className={`" ${
                            FirstNavBar_activeIndex !== 2 ||
                            SideBar_activeIndex !== 2
                                ? "hidden"
                                : ""
                        } "`}
                    >
                        <FileSearch />
                    </div>
                    <div
                        className={`" ${
                            FirstNavBar_activeIndex !== 3 ||
                            SideBar_activeIndex !== 2
                                ? "hidden"
                                : ""
                        } "`}
                    >
                        <FileValidation />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
