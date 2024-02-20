import React, {useState} from "react";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div className={`fixed inset-y-0 left-0 w-64 bg-orange-200 transition-transform duration-300 transform ${
                    showSidebar ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="p-5">
                    <h1 className="text-white text-lg font-bold">Sidebar Content</h1>
                </div>
            </div>

            <div className="flex-1 overflow-x-hidden overflow-y-auto p-4">
                <button className={`fixed top-1 text-white ${
                    showSidebar ? "left-1" : "left-1"
                }`} onClick={toggleSidebar}>
                    <img src="/assets/svg/menu.svg" width={20}  alt=""/>
                </button>

            </div>
            {showSidebar && (
                <div className="fixed inset-0 bg-black opacity-50 cursor-pointer" onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default Sidebar;
