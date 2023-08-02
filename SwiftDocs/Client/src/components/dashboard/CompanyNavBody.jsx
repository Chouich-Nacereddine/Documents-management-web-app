import React from "react";
import Card from "../Card";
import Profile from "../Profile";

const CompanyNavBody = () => {
    return (
        <div className="flex flex-col h-screen overflow-y-auto">
            <div className="p-2 flex flex-wrap	justify-around">
                <Card
                    data={{
                        title: "Files",
                        Company: "Ensa",
                        Qte: 2918,
                        path: "files",
                        description:
                            "files successfully hosted with us. Feel free to manage, access, and organize your documents with ease",
                    }}
                />
                <Card
                    data={{
                        title: "Users",
                        Company: "Ensa",
                        Qte: 2918,
                        path: "Users",
                        description:
                            "active users on the platform. Your presence and engagement contribute to making SwiftDocs an efficient and collaborative environment.",
                    }}
                />
                <Card
                    data={{
                        title: "Messages",
                        Company: "Ensa",
                        Qte: 2918,
                        path: "Messages",
                        description:
                            "unseen messages waiting for your attention. Stay connected with SwiftDocs! If you have any questions, please don't hesitate to reach out to us",
                    }}
                />
            </div>
            <div className="relative">
                <Profile />
            </div>
        </div>
    );
};

export default CompanyNavBody;
