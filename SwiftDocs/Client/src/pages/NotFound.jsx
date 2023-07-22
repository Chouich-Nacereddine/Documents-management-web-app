import React from "react";
import NotFoundSvg from '../assets/NotFoundSvg.svg'
import "./Scss/NotFound.scss";

const NotFound = () => {
    return (
        <div>
            <img src={NotFoundSvg} alt="Not Found" className="w-[100vw] h-[88vh] error-svg"/>
        </div>
    );
};

export default NotFound;
