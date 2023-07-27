import React, { useRef, useEffect } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import Typed from "typed.js";
import "./Css/Form.css";

const CompanieSignUP = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Company", " "],
            typeSpeed: 50,
            loop: true,
            backDelay: 1000,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className="sm:w-[50vw] h-[88vh] flex flex-col">
            <div className="absolute flex self-start top-[50%] text-8xl text-[#FF6600] animate-bounce">
                <AiOutlineCaretRight />
            </div>
            <div className="flex justify-center">
                <h2 className="text-white text-3xl py-6 font-semibold">
                    I'm a <span className="text-red-600" ref={el} />
                </h2>
            </div>
            <div className="flex justify-center items-center">
                <form className="form">
                    <div className="form_front_Company w-full">
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
                        <span className="switch">
                        Already have an account?{" "}
                            <a href="/login" className="signup_tog">
                                Login
                            </a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CompanieSignUP;
