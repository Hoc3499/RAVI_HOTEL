import React from 'react';
import search from "../../assets/icons/search_FILL0_wght400_GRAD0_opsz48.svg";
import notifications from "../../assets/icons/notifications_FILL0_wght400_GRAD0_opsz48.svg";
import help from "../../assets/icons/help_FILL0_wght400_GRAD0_opsz48.svg";
import fullscreen from "../../assets/icons/fullscreen_FILL0_wght400_GRAD0_opsz48.svg";
import account from "../../assets/icons/account_circle_FILL0_wght400_GRAD0_opsz48.svg";

const NavSearch = () => {
    return (
        <div className='h-[76px] border rounded '>
            <div className='flex float-right mt-[19px]'>
                <div className="input flex items-center relative">
                    <img className='absolute w-[18px] h-[18px] ml-2' src={search} alt="" />
                    <input type="text" placeholder='Tìm kiếm' className='border py-[5px] pl-[30px] placeholder:text-[14px] w-[345px]' />
                </div>
                <div className="icon flex items-center text-[28px] ">
                    <img className=' w-7 h-w-7 mx-4' src={notifications} alt="" />
                    <img className=' w-7 h-w-7 mx-4' src={help} alt="" />
                    <img className=' w-7 h-w-7 mx-4' src={fullscreen} alt="" />
                    <img className=' w-7 h-w-7 mx-4' src={account} alt="" />
                </div>
            </div>
        </div >
    )
}

export default NavSearch
