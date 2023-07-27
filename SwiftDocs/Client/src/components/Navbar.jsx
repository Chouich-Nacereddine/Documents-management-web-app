import React, { useState }  from "react";


const Navbar = () => {
    // const [active,setActive] = useState(false);

    // const handleclick = () => {
    //     setActive()
    // }
    return (
        <div className=" fixed -full sm:w-[100vw] h-[12vh] bg-[#2c2e30] flex px-4 sm:px-14 items-center justify-between">
            <div className="flex w-[70%] sm:w-[45vw] justify-between items-center">
                <div className="text-white text-2xl sm:text-4xl font-semibold tracking-wider w-[max-content]">
                    <a href="/" className="cursor-pointer">
                    <span className="text-red-600">S</span>wift
                    <span className="text-[#FF6600]">D</span>ocs.
                    </a>
                </div>
                <div className="text-[#FF6600] text-lg sm:text-xl font-medium tracking-widest ">
                    <a href="/" className="mr-2 sm:mr-6 hover:text-white">Home</a>
                    <a href="#about" className="mr-2 sm:mr-6 hover:text-white">About</a>
                    <a href="#contact" className="mr-2 sm:mr-6 hover:text-white">Contact</a>
                </div>
            </div>
            <div className="text-lg sm:text-xl font-semibold flex justify-end w-[30%] sm:w-[55vw]">
                <a href="/login" className=" text-white p-1">Login</a>
                <a href="/sign-up" className="text-[#2c2e30] ml-2 sm:ml-5 bg-[#FF6600] p-1 sm:py-1 sm:px-2 rounded-[50px]">Sign up</a>
            </div>
        </div>
    );
};

export default Navbar;
