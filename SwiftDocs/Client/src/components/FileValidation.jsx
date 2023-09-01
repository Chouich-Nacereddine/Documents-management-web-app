import React from "react";
import { HiOutlineCloudDownload } from "react-icons/hi";
import {RxUpdate} from 'react-icons/rx'
import {FaCheck} from 'react-icons/fa'

const FileValidation = () => {
    return (
        <div className="h-screen overflow-y-auto">
            <div className="flex justify-center p-10">
                <h1 className="text-3xl text-[#FF6600]">Uploaded Files Validation</h1>
            </div>
            <div className="px-6">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    File name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Processes
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Uploader
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Download
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Update
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Validate
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white dark:bg-gray-800">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4 ">Black</td>
                                <td className="px-6 py-4">Accessories</td>
                                <td className="px-12 py-4">
                                    <HiOutlineCloudDownload className="text-xl text-blue-500 cursor-pointer" />
                                </td>
                                <td className="px-10 py-4">
                                    <RxUpdate className="text-xl text-red-500 cursor-pointer" />
                                </td>
                                <td className="px-10 py-4">
                                    <FaCheck className="text-xl text-green-500 cursor-pointer" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FileValidation;
