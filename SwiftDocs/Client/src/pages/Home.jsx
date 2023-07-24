import React from "react";
import About from "./About";
import SVG from "../assets/blob.svg";
import SVG1 from "../assets/blob1.svg";
import SVG2 from "../assets/blob2.svg";
import SVG3 from "../assets/blob3.svg";
import SVG4 from "../assets/blob4.svg";
import "./Css/Btn.css";
// import "./Css/blob.css";

const Home = () => {
    return (
        <>
            <div className="sm:w-[100vw] sm:h-[100vh] text-white flex flex-col items-center justify-start font-bold pt-[25vh]">
                <h2 className="text-3xl tracking-widest py-4">
                    <span className="text-red-600">W</span>elcome{" "}
                    <span className="text-[#FF6600] ">T</span>o
                </h2>
                <h1 className="text-6xl tracking-widest py-6">
                    <span className="text-red-600">S</span>wift
                    <span className="text-[#FF6600]">D</span>ocs.
                </h1>
                <p className="w-[90vw] text-center">
                    {" "}
                    Welcome to your document management application. Our
                    platform aims to simplify and enhance the way businesses
                    handle their critical documents. With our user-friendly
                    interface, you can easily organize, share, and collaborate
                    on documents with your colleagues and business partners. No
                    more wasting time searching for misplaced files or managing
                    outdated versions. Our application keeps all your important
                    documents in one place, accessible with just a single click.
                    Whether you run a small business or a large corporation, our
                    document management solution is designed to adapt to your
                    specific needs. Start optimizing your workflow and
                    maximizing productivity today with our document management
                    application.
                </p>

                <span className=" text-2xl mt-6 p-2 rounded-xl button">
                    <a href="/sign-up">Get started</a>
                </span>

                <span className="animate-pulse absolute top-[0vh] left-[0vw] w-[16vw] h-[3vh] z-[-2]">
                    <img src={SVG} alt="SwiftDocs" />
                </span>
                <span className="animate-pulse absolute top-[65vh] right-[0vw] w-[20vw] h-[5vh] z-[-2]">
                    <img src={SVG1} alt="svg" />
                </span>
                <span className="animate-pulse absolute top-[50vh] left-[0vw] w-[30vw] h-[1vh]  z-[-2]">
                    <img src={SVG2} alt="svg" />
                </span>
                <span className="animate-pulse absolute top-[0vh] right-[0vw] w-[16vw] h-[3vh] z-[-2]">
                    <img src={SVG3} alt="svg" />
                </span>
                <span className="animate-pulse absolute top-[15vh] left-[50vw] w-[20vw] z-[-2]">
                    <img src={SVG4} alt="svg" />
                </span>
                <About/>
            </div>
        </>
    );
};

export default Home;
