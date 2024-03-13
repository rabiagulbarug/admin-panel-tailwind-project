import React, {useState} from "react";
import {menuitems} from "./menu-items";

interface SidebarProps {
    showSidebar: boolean;
    toggleSidebar: () => void;
}

const RenderItem = ({item}: any) => {
    const [expand, setExpand] = useState(false)
    return <li>
        <div className="flex flex-row gap-3 items-center">
            <span>{item.icon}</span>
            <div className='flex'>
                <a href={item.path}><span className=''>{item.title}</span></a>
                <>
                    {item.subcategories && item.subcategories.length > 0 && (
                        <>
                            <button type="button" onClick={() => setExpand(expand => !expand)}>{expand ? 'y' :
                                'x'}</button>
                            <RenderSubCategories subcategories={item.subcategories} visible={expand}/>
                        </>
                    )}
                </>
            </div>
        </div>
    </li>
}

const RenderSubCategories = ({subcategories, visible}: { subcategories: any[], visible: boolean }) => {
    if (!subcategories) return null;
    return (
        <span className={`text-gray-500 text-sm ${visible ? 'flex' : 'hidden'}`}>
            <ul>
                {subcategories.map((item, index) => (
                    <RenderItem item={item} key={item.path + index}/>
                ))}
            </ul>
        </span>
    )
}

const Sidebar = ({ showSidebar, toggleSidebar }: SidebarProps) => {

    return (
        <div className="flex h-screen bg-gray-100">
            <div className={`fixed inset-y-0 left-0 w-64 bg-orange-200 transition-transform duration-300 transform ${
                    showSidebar ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-5">

                </div>
            </div>

            <div className="flex-1 overflow-x-hidden overflow-y-auto p-4" onClick={toggleSidebar}>
                <button className={`fixed top-1 text-white ${
                    showSidebar ? "left-1" : "left-1"
                }`}>
                    <img src="/assets/svg/menu.svg" width={20}  alt=""/>
                </button>
            </div>
            {showSidebar && (
                <div className="fixed inset-0 cursor-pointer" onClick={toggleSidebar}>
                    <ul className='mt-10'>
                        {menuitems.map((item, index) => (
                            <RenderItem key={item.path + index} item={item}/>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
