import React, { useRef, useEffect } from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
import Typed from "typed.js";
import "./Css/Form.css";

const UserSignUP = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Employee", " "],
            typeSpeed: 50,
            loop: true,
            backDelay: 1000,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="sm:w-[50vw] h-[88vh] bg-[#FF6600] flex flex-col">
            <div className="absolute flex self-end top-[50%] text-8xl text-[#1D1F21] animate-bounce">
                <AiOutlineCaretLeft />
            </div>
            <div className="flex justify-center">
                <h2 className="text-white text-3xl py-6 font-semibold">
                    I'm an <span className="text-red-600" ref={el} />
                </h2>
            </div>

            <div className="flex justify-center items-center">
                <form className="form">
                    <div className="form_front w-full">
                        <div className="form_details text-white ">Sign Up</div>
                        <input
                            type="text"
                            className="input"
                            placeholder="Company"
                        />
                        <input
                            type="text"
                            className="input"
                            placeholder="Username or Email"
                        />
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                        />
                        <button className="btn">Login</button>
                        <span className="switch text-gray-500">
                        Already have an account?{" "}
                            <a
                                href="/login"
                                className="signup_tog text-white"
                            >
                                Login
                            </a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserSignUP;
