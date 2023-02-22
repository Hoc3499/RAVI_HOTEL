import { NavLink } from "react-router-dom";
import darkMode from "../../assets/icons/dark_mode_FILL0_wght400_GRAD0_opsz48.svg";
import lightMode from "../../assets/icons/light_mode_FILL0_wght400_GRAD0_opsz48.svg";
import { SIDEBAR } from "../../constants/sidebar";

const SidebarRight = () => {
    return (
        <div className='col-span-3 flex flex-col justify-between'>
            <div className="">
                <div className=" ml-[32px] my-[25px] font-bold text-[20px] ">Đặt phòng</div>
                <hr className='' />
                <div className=" flex flex-col ml-[16px] w-full mt-[19px] cursor-pointer">
                    {SIDEBAR[0].list?.map(item => {
                        return (
                            <NavLink to={item.path} key={item.title} className=" text-[14px] leading-[40px] pl-[16px] w-[calc(100%-32px)] ">{item.title}</NavLink>
                        )
                    })}
                    {/* <span className={`item text-[14px] leading-[40px] pl-[16px] w-[calc(100%-32px)] text-[#BA9256] bg-[#F5F5F5] `}>Tạo đặt phòng mới</span>
                    <span className="item text-[14px] leading-[40px] pl-[16px] ">Tìm kiếm đặt phòng</span>   {text-[#BA9256] bg-[#F5F5F5]}
                    <span className="item text-[14px] leading-[40px] pl-[16px] ">Trang thái đặt phòng</span>
                    <span className="item text-[14px] leading-[40px] pl-[16px] ">Nhật ký</span>
                    <span className="item text-[14px] leading-[40px] pl-[16px] ">Tình trạng phòng trống</span>
                    <span className="item text-[14px] leading-[40px] pl-[16px] ">Hồ sơ công ty, đại lý du lịch</span>
                    <span className="item text-[14px] leading-[40px] pl-[16px] ">Hồ sơ khách</span>
                    <span className="item text-[14px] leading-[40px] pl-[16px] ">Hợp đồng Allotment</span>
                    <span className="item text-[14px] leading-[40px] pl-[16px] ">Đặt phòng từ CMS/EZCRS</span>
                    `item text-[14px] leading-[40px] pl-[16px] w-[calc(100%-32px)] ${isActive ? "text-[#BA9256] bg-[#F5F5F5]" : ""}`
                    <span className="item text-[14px] leading-[40px] pl-[16px] ">Danh sách nhiệm vụ</span> */}
                </div>
            </div>
            <div className="  border-t  py-[19px] px-[15px]">
                <div className="flex bg-[#E5E5E5] h-9 justify-evenly rounded">
                    <div className="flex items-center rounded bg-white my-[2px] px-6" >
                        <img className="mr-2 h-5 w-5" src={lightMode} alt="" />
                        <button>Light</button>
                    </div>
                    <div className="flex items-center rounded my-[2px] px-6 text-[#adadad]">
                        <img className="mr-2 h-5 w-5" src={darkMode} alt="" />
                        <button>Dark</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarRight
