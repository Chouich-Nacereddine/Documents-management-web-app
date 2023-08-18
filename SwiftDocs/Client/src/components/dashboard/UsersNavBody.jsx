import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { UsersSidebarArray, SecondeNavBarArray } from "../js/Arrays";

const UsersNavBody = ({ employeeAll }) => {
  const [UsersSideBar_activeIndex, setUsersSideBar_activeIndex] = useState(0);
  const UsersSideBar_handleSpanClick = (index) => {
    setUsersSideBar_activeIndex(index);
  };
  const [SecondeNavBar_activeIndex, setSecondeNavBar_activeIndex] = useState(0);
  const [BodyIsActive, setBodyIsActive] = useState(0);
  const SecondeNavBar_handleSpanClick = (index) => {
    setSecondeNavBar_activeIndex(index);
    setBodyIsActive(index);
  };

//   console.log(employeeAll);

  if (!employeeAll || employeeAll.length === 0) {
    return (
      <div role="status" className="flex items-center justify-center w-full h-screen">
        <svg
          aria-hidden="true"
          className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <div className="h-screen overflow-y-auto">
      <div className="flex-grow flex overflow-x-hidden">
        <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-800 h-screen overflow-y-auto lg:block hidden p-5 scrollbar-hide">
          <div className="text-xs text-gray-400 tracking-wider ">USERS</div>
          <div className="relative mt-2">
            <input
              type="text"
              className="pl-8 h-9 bg-transparent border border-gray-700 text-white w-full rounded-md text-sm"
              placeholder="Search"
            />
            <svg
              viewBox="0 0 24 24"
              className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <div className="space-y-4 mt-3">
            {employeeAll.map((item, index) => (
              <button
                key={index}
                onClick={() => UsersSideBar_handleSpanClick(index)}
                className={`" p-3 w-full flex flex-col rounded-md bg-[#2c2e30] ${
                  UsersSideBar_activeIndex === index
                    ? "relative ring-2 ring-[#ff983f] focus:outline-none scale-[1.05]"
                    : "ring-[.5px] ring-white"
                } "`}
              >
                <div className="flex xl:flex-row flex-col items-center font-medium text-white pb-2 mb-2 xl:border-b  border-opacity-75 border-gray-700 w-full">
                  <img
                    src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512"
                    className="w-7 h-7 mr-2 rounded-full"
                    alt="profile"
                  />
                  {item.Last_name} {item.First_name}
                </div>
                <div className="flex items-center w-full">
                  <div className="text-xs py-1 px-2 leading-none bg-gray-900 text-green-600 rounded-md">
                    {item.Position}
                  </div>
                  <div className="ml-auto text-xs text-gray-500">
                    {item.Gender}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex-grow bg-[#1D1F21] h-screen  overflow-y-auto">
          <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b bg-[#1D1F21] text-white border-gray-800 sticky top-0 z-[3]">
            <div className="flex w-full items-center">
              <div className="flex items-center text-3xl text-white">
                <img
                  src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512"
                  className="w-12 mr-4 rounded-full "
                  alt="profile"
                />
                {employeeAll[UsersSideBar_activeIndex].Last_name}{" "}
                {employeeAll[UsersSideBar_activeIndex].First_name}
              </div>
              <div className="ml-auto sm:flex hidden items-center justify-end">
                <div className="text-right">
                  <div className="text-xs text-gray-400">
                    {employeeAll[UsersSideBar_activeIndex].Position}
                  </div>
                  <div className=" text-lg text-white">
                    {employeeAll[UsersSideBar_activeIndex].Gender}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 sm:mt-7 mt-4">
              {SecondeNavBarArray.map((item, index) => (
                <div key={index}>
                  <a
                    href="#"
                    onClick={() => SecondeNavBar_handleSpanClick(index)}
                    className={`"px-3  pb-1.5 " ${
                      SecondeNavBar_activeIndex === index
                        ? "text-[#FF6600] border-[#FF6600] border-b-2"
                        : "border-transparent text-white "
                    }`}
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:p-7 p-4">
            <div className="flex w-full items-center mb-7">
              <button className="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 border-gray-600 leading-none py-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 mr-2 text-gray-600"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Last 30 days
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 ml-1.5 text-gray-600"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <button className="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 border-gray-800 border leading-none py-0">
                Filter by
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 ml-1.5 text-gray-600"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center">
                <span className="mr-3">Page 2 of 4</span>
                <button className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-800 leading-none py-0">
                  <svg
                    className="w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-800 leading-none py-0">
                  <svg
                    className="w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
            <table
              className={`" w-full text-left ${
                BodyIsActive !== 0 ? "hidden" : ""
              } "`}
            >
              <thead>
                <tr className="text-gray-400">
                  <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-800">
                    Activity Name
                  </th>
                  <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-800">
                    File
                  </th>
                  <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-800 hidden md:table-cell">
                    Description
                  </th>
                  <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-800">
                    Amount
                  </th>
                  <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-800 sm:text-gray-400 text-white">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-100">
                <tr>
                  <td className="sm:p-3 py-2 px-1 border-b border-gray-800">
                    <div className="flex items-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 mr-5 text-yellow-500"
                        stroke="currentColor"
                        stroke-width="3"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      {/* {data.Activities.title} */}
                    </div>
                  </td>
                  <td className="sm:p-3 py-2 px-1 border-b border-gray-800">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512.001 512.001"
                        className="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-800"
                      >
                        <path
                          fill="#03a9f4"
                          d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                        />
                        <path
                          fill="#283593"
                          d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                        />
                      </svg>
                      {/* {data.Activities.fillname} */}
                    </div>
                  </td>
                  <td className="sm:p-3 py-2 px-1 border-b border-gray-800 md:table-cell hidden">
                    {
                      // UsersSidebarArray[
                      //     UsersSideBar_activeIndex
                      // ].Activities.Description
                    }
                  </td>
                  <td className="sm:p-3 py-2 px-1 border-b border-gray-800 text-red-500">
                    {
                      // UsersSidebarArray[
                      //     UsersSideBar_activeIndex
                      // ].Activities.Flux
                    }
                  </td>
                  <td className="sm:p-3 py-2 px-1 border-b border-gray-800">
                    <div className="flex items-center">
                      <div className="sm:flex hidden flex-col">
                        {
                          // UsersSidebarArray[
                          //     UsersSideBar_activeIndex
                          // ].Activities.date.date
                        }
                        <div className="text-gray-400 text-xs">11:16 AM</div>
                      </div>
                      <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              className={`" flex flex-col items-start justify-center py-1  gap-10 relative w-full  ${
                BodyIsActive !== 1 ? "hidden" : ""
              } "`}
            >
              <div className="flex flex-col justify-center items-center w-full">
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
                          value={
                            employeeAll[UsersSideBar_activeIndex].First_name
                          }
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
                          value={
                            employeeAll[UsersSideBar_activeIndex].Last_name
                          }
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
                          value={employeeAll[UsersSideBar_activeIndex].Gender}
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
                          type="text"
                          id="phone"
                          className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                          placeholder="123-45-678"
                          value={
                            employeeAll[UsersSideBar_activeIndex].Phone_number
                          }
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
                          value={
                            employeeAll[UsersSideBar_activeIndex].IsAdmin
                              ? "true"
                              : "false"
                          }
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
                          value={employeeAll[UsersSideBar_activeIndex].Position}
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
                        value={employeeAll[UsersSideBar_activeIndex].email}
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
            <div className="flex w-full mt-5 space-x-2 justify-end">
              <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-800 leading-none">
                <svg
                  className="w-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-800 leading-none">
                1
              </button>
              <button className="inline-flex items-center h-8 w-8 justify-center rounded-md shadow border border-gray-800 bg-gray-800 text-white leading-none">
                2
              </button>
              <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-800 leading-none">
                3
              </button>
              <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-800 leading-none">
                4
              </button>
              <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-800 leading-none">
                <svg
                  className="w-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersNavBody;