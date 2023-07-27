import React from "react";
import './Css/ContactForm.css'

const ContactForm = () => {
    return (
        <>
            <div className="login-box z-[3]">
                <form>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Full Name</label>
                    </div>
                    <div className="user-box">
                        <input type="email" name="" required="" />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Subject</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Message</label>
                    </div>
                    <center>
                        <a href="#">
                            SEND
                            <span></span>
                        </a>
                    </center>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
