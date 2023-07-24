import React, { useState } from "react";
import "./Css/Menu.css";
import { TbFolderSearch } from "react-icons/tb";
import { LuFolderLock } from "react-icons/lu";
import { PiFootprints } from "react-icons/pi";
import { BiTimer } from "react-icons/bi";
import { VscVersions } from "react-icons/vsc";
import { TiCloudStorageOutline } from "react-icons/ti";

const Menu = () => {
    const [isActive, setActive] = useState(0);

    const handleClick = (index) => {
        // icons logic
        const Active_icon = document.getElementById(index);
        Active_icon.classList.add("text-[#FF6600]");
        // console.log(Active_icon)
        setActive(index);
        if (index != isActive) {
            const Not_Active_icon = document.getElementById(isActive);
            Not_Active_icon.classList.remove("text-[#FF6600]");
        }

        // description logic
        const Active_Description = document.querySelector(`[name="${index}"]`);
        // console.log(Active_Description)
        Active_Description.classList.remove("hidden");
        if (index != isActive) {
            const Not_Active_Description = document.querySelector(
                `[name="${isActive}"]`
            );
            Not_Active_Description.classList.add("hidden");
        }
    };

    const lineData = [
        {
            Default_icon: (
                <LuFolderLock className="timeline__icon timeline__icon--default" />
            ),
            title: "Security",
            description:
                "At SwiftDocs, the security of your documents is our utmost priority. We employ state-of-the-art encryption and access control mechanisms to safeguard your data from unauthorized access and ensure complete confidentiality. With our robust security measures, you can trust that your valuable documents are protected at all times.",
        },
        {
            Default_icon: (
                <BiTimer className="timeline__icon timeline__icon--default" />
            ),
            title: "Save Time",
            description:
                "SwiftDocs is designed to optimize your document management process, empowering you to save valuable time and boost overall efficiency. Our user-friendly interface and intuitive features enable seamless organization, easy retrieval, and smooth collaboration. Spend less time on administrative tasks and more time on what truly matters.",
        },
        {
            Default_icon: (
                <TbFolderSearch className="timeline__icon timeline__icon--default" />
            ),

            title: "Search",
            description:
                "With SwiftDocs' powerful search functionality, finding the exact document you need is effortless. Our advanced search algorithms swiftly scan through your entire document repository, delivering instant and accurate results. Say goodbye to time-consuming manual searches and hello to quick access to the information you seek.",
        },
        {
            Default_icon: (
                <VscVersions className="timeline__icon timeline__icon--default" />
            ),
            title: "Version Control",
            description:
                "Maintaining document version control is a breeze with SwiftDocs. Our comprehensive version control system keeps track of document changes, revisions, and updates. Never worry about working with outdated files again, as SwiftDocs ensures you're always working with the latest, most accurate version.",
        },
        {
            Default_icon: (
                <PiFootprints className="timeline__icon timeline__icon--default" />
            ),
            title: "Traceability",
            description:
                "At SwiftDocs, we prioritize transparency and accountability. Through our robust user traceability features, you can monitor and track every user's actions within the system. From document edits to access history, you'll have a complete audit trail for enhanced security and compliance.",
        },
        {
            Default_icon: (
                <TiCloudStorageOutline className="timeline__icon timeline__icon--default" />
            ),
            title: "Storage",
            description:
                "With SwiftDocs, you'll never have to worry about running out of storage space. Our reliable and secure cloud storage provides ample room for all your documents, whether small or large. Rest assured that your data is safe, accessible, and readily available whenever you need it.",
        },
    ];
    return (
        <>
            <div className="flex flex-col items-center text-white h-[88vh] w-[100vw]">
                <div className="pt-1">
                    <h2 className=" flex flex-col font-bold text-3xl  justify-center items-center">
                        <div>About</div>{" "}
                        <div>
                            <span className="text-red-600">S</span>wift{" "}
                            <span className="text-[#FF6600] ">D</span>ocs
                        </div>
                    </h2>
                </div>
                <div className="mt-[5vh] w-[100vw]">
                    <div>
                        <div className="timeline">
                            <div className="timeline__stepper ">
                                {lineData.map((item, index) => (
                                    <div
                                        className={`timeline__step ${
                                            index === 0 ? "text-[#FF6600]" : ""
                                        }`}
                                        key={index}
                                        id={index}
                                        onClick={() => handleClick(index)}
                                    >
                                        {item.Default_icon}
                                        <p className="timeline__step-title">
                                            {item.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-white">
                    {lineData.map((item, index) => (
                        <div className="timeline__slides" key={index}>
                            <div
                                className={`timeline__slide is-active  ${
                                    index === 0 ? "" : "hidden"
                                }`}
                                name={index}
                            >
                                <h3 className="timeline__slide-title text-[#FF6600]">
                                    {item.title}
                                </h3>
                                <div className="timeline__slide-content">
                                    <p className="text-justify">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Menu;
