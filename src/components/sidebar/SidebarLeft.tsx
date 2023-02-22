import React from "react";
import { Link } from "react-router-dom";
// import card_travel from "../../assets/icons/card_travel_black_24dp.svg";
// import support_agent from "../../assets/icons/support_agent_black_24dp.svg";
// import approval_delegation from "../../assets/icons/approval_delegation_FILL0_wght400_GRAD0_opsz48.svg";
// import groups from "../../assets/icons/groups_black_24dp.svg";
// import room_preferences from "../../assets/icons/room_preferences_black_24dp.svg";
// import lab_profile from "../../assets/icons/lab_profile_FILL0_wght400_GRAD0_opsz48.svg";
// import domain from "../../assets/icons/domain_black_24dp.svg";
// import content_paste_search from "../../assets/icons/content_paste_search_black_24dp.svg";
// import local_mall from "../../assets/icons/local_mall_black_24dp.svg";
// import monetization_on from "../../assets/icons/monetization_on_black_24dp.svg";
// import assignment from "../../assets/icons/assignment_black_24dp.svg";
import info from "../../assets/icons/info_black_24dp.svg";
import settings from "../../assets/icons/settings_black_24dp.svg";
import { SIDEBAR } from "../../constants/sidebar";


const SidebarLeft = () => {
    return (
        <div className={`w-[calc(100%-16px)] flex flex-col  bg-[#BA9256] text-white rounded justify-between ml-4`}>
            <div className="bg-[#E5E5E5] rounded-full w-[40px] h-[40px] mx-auto mt-[18px] "></div>
            <div className="icon flex flex-col items-center mb-[54px] ">
                {SIDEBAR.map(item => {
                    return (
                        <Link key={item.icon} to={item.path}>
                            <img className="icon w-7 mb-[26px] h-7 cursor-pointer" src={item.icon} alt="" />
                        </Link>
                    )
                })}
                {/* <img className="icon w-14 mb-[26px] h-7 bg-red-500 " src={card_travel} alt="" />
                <img className="icon w-7 mb-[26px] h-7" src={support_agent} alt="" />
                <img className="icon w-7 mb-[26px] h-7" src={approval_delegation} alt="" />
                <img className="icon w-7 mb-[26px] h-7" src={groups} alt="" />
                <img className="icon w-7 mb-[26px] h-7" src={room_preferences} alt="" />
                <img className="icon w-7 mb-[26px] h-7" src={lab_profile} alt="" />
                <img className="icon w-7 mb-[26px] h-7" src={domain} alt="" />
                <img className="icon w-7 mb-[26px] h-7" src={content_paste_search} alt="" />
                <img className="icon w-7 mb-[26px] h-7" src={local_mall} alt="" />
                <img className="icon w-7 mb-[26px] h-7" src={monetization_on} alt="" />
                <img className="icon w-7 mb-[26px] h-7" src={assignment} alt="" /> */}
            </div>
            <div className="bot flex flex-col items-center mb-[22px]">
                <img className="icon w-7 h-7 mb-5" src={info} alt="" />
                <img className="icon w-7 h-7" src={settings} alt="" />

            </div>
        </div>
    );
};

export default SidebarLeft;
