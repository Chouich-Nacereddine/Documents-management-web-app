import React, { useEffect, useState } from "react";
import LeftSideBar from "./dashboard/LeftSideBar";
import UsersNavBody from "./dashboard/UsersNavBody";
import { CgLogOut } from "react-icons/cg";

import {
    UsersSidebarArray,
    FirstNavBar,
    SecondeNavBarArray,
} from "./js/Arrays";
import CompanyNavBody from "./dashboard/CompanyNavBody";
import Chat from "./Chat";

const UserDashboard = () => {
    const [UsersSideBar_activeIndex, setUsersSideBar_activeIndex] = useState(0);
    const UsersSideBar_handleSpanClick = (index) => {
        setUsersSideBar_activeIndex(index);
    };
    const [FirstNavBar_activeIndex, setFirstNavBar_activeIndex] = useState(0);
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
                <LeftSideBar />
                <div className="flex-grow overflow-hidden h-full flex flex-col">
                    <div className="h-10 lg:flex w-full border-b border-[#FF6600] hidden px-10">
                        <div className="flex h-full text-gray-400">
                            {FirstNavBar.map((item, index) => (
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
                            FirstNavBar_activeIndex !== 0 ? "hidden" : ""
                        } "`}
                    >
                        <CompanyNavBody
                            data={UsersSidebarArray[UsersSideBar_activeIndex]}
                        />
                    </div>
                    <div
                        className={`" ${
                            FirstNavBar_activeIndex !== 1 ? "hidden" : ""
                        } "`}
                    >
                        <UsersNavBody
                            data={UsersSidebarArray[UsersSideBar_activeIndex]}
                        />
                    </div>
                    <div
                        className={`" ${
                            FirstNavBar_activeIndex !== 2 ? "hidden" : ""
                        } "`}
                    >
                        <Chat
                            data={UsersSidebarArray[UsersSideBar_activeIndex]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
