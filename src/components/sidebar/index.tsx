import React from "react";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

const Sidebar = () => {
    return (
        <div className=" grid grid-cols-4 min-h-[100vh] h-[calc(100%-16px)] border mr-[16px] rounded">
            <SidebarLeft />
            <SidebarRight />
        </div>
    );
};

export default Sidebar;
