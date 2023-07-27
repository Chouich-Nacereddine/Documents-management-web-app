import React from "react";
import ContactForm from "../components/ContactForm";
import "./Css/Contact.css";
const Contact = () => {
    return (
        <>
            <div className="Contact_container z-[-3]">
                <div
                    id="contact"
                    className="w-[100vw] min-h-[90vh] flex flex-col pt-20  items-center"
                >
                    <h2 className=" flex font-bold text-3xl pb-7 justify-center items-center">
                        <div>
                            <span className="text-red-600">C</span>ontact{" "}
                            <span className="text-[#FF6600] ">U</span>s
                        </div>
                    </h2>
                <ContactForm />
                </div>
                <div className="blob"></div>
            </div>
        </>
    );
};

export default Contact;
