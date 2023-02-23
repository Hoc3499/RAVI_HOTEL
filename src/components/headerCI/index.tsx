import React from 'react'
import { COLORS } from '../../constants/colors'
import create from "../../assets/icons/edit_FILL0_wght400_GRAD0_opsz48.svg";

interface Props {
    label?: string;

}

const HeaderCustomerInfo = ({ label }: Props) => {
    return (
        <div className="header flex justify-between mx-4 mt-5 mb-1">
            <span className="font-bold text-xl">Thông tin người đặt</span>
            <div className="relative ">
                <img src={create} alt="" className="w-[14px] h-[14px] absolute top-1 -left-6" />
                <span className={`text-[12px] text-[${COLORS.primaryColor}]`}>{label}</span>
            </div>
        </div>
    )
}

export default HeaderCustomerInfo
