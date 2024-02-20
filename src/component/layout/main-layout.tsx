import React, { useState } from "react";
import Sidebar from "../menu-item/sidebar";

export const MainLayout = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="flex flex-row">
            <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
            <div className={`flex-1 overflow-x-hidden overflow-y-auto p-4 transition-margin duration-300 ${showSidebar ? "ml-64" : "ml-0"}`}>
                <div className="p-4">
                    <h1 className="text-xl font-bold">Main Content</h1>
                </div>
            </div>
        </div>
    );
};
