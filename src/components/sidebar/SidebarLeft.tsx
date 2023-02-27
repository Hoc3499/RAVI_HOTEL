import { Link } from "react-router-dom";
import info from "../../assets/icons/info_white_24dp.svg";
import settings from "../../assets/icons/settings_black_24dp.svg";
import { SIDEBAR } from "../../constants/sidebar";


const SidebarLeft = () => {
    return (
        <div className={`sidebar w-[calc(100%-16px)] text-white rounded justify-between ml-4 relative`}>
            <div className="bg-[#E5E5E5] rounded-full w-[40px] h-[40px] mx-auto mt-[18px] "></div>
            <div className="icon flex flex-col items-center my-[90px]  ">
                {SIDEBAR.map(item => {
                    return (
                        <Link key={item.icon} to={item.path}>
                            <img className="icon w-7 mb-[26px] h-7 cursor-pointer" src={item.icon} alt="" />
                        </Link>
                    )
                })}
            </div>
            <div className="sbl-bot absolute  bottom-0 mb-[22px]">
                <img className="icon w-7 h-7 mb-5" src={info} alt="" />
                <img className="icon w-7 h-7" src={settings} alt="" />
            </div>
        </div>
    );
};

export default SidebarLeft;
