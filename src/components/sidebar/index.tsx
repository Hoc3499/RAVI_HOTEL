import React from "react";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

const Sidebar = () => {
    return (
        <div className="grid grid-cols-4 h-[calc(100vh-16px)] border mr-[16px] rounded">
            <SidebarLeft />
            <SidebarRight />
        </div>
    );
};

export default Sidebar;
