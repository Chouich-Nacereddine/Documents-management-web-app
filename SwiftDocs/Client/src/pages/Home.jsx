import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";
import SVG from "../assets/blob.svg";
import SVG1 from "../assets/blob1.svg";
import SVG2 from "../assets/blob2.svg";
import SVG3 from "../assets/blob3.svg";
import SVG4 from "../assets/blob4.svg";
import "./Css/Btn.css";

const Home = () => {
    return (
        <div className="sm:w-[100vw] sm:h-[100vh] text-white flex flex-col items-center justify-start font-bold pt-[25vh]">
            <div className="blob z-[-2] ">
                <svg
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 310 350"
                >
                    <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
                </svg>
            </div>
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
                Welcome to your document management application. Our platform
                aims to simplify and enhance the way businesses handle their
                critical documents. With our user-friendly interface, you can
                easily organize, share, and collaborate on documents with your
                colleagues and business partners. No more wasting time searching
                for misplaced files or managing outdated versions. Our
                application keeps all your important documents in one place,
                accessible with just a single click. Whether you run a small
                business or a large corporation, our document management
                solution is designed to adapt to your specific needs. Start
                optimizing your workflow and maximizing productivity today with
                our document management application.
            </p>

            <span className=" text-2xl mt-6 p-2 rounded-xl button">
                <a href="/sign-up">Get started</a>
            </span>
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
