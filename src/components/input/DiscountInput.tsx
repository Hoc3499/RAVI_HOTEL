import React from 'react'
import percent from "../../assets/icons/percent_FILL0_wght400_GRAD0_opsz48.svg";
import money from "../../assets/icons/attach_money_FILL0_wght400_GRAD0_opsz48.svg";


interface DiscountInputProps {
    require?: any;
    label?: string;
    wrapCss?: string;
    img?: string;
}

const DiscountInput = ({ img, label, require, wrapCss }: DiscountInputProps) => {
    switch (img) {
        case "percent": img = percent
            break;
        case "money": img = money
            break;
    }
    return (
        <div className={`${wrapCss ? `${wrapCss} mr-[15px]` : `mr-[15px]`}`}>
            <label htmlFor="" className="font-light text-xs">{label}</label>
            {require && <span className="text-red-500 ml-1">*</span>}
            <div className="input flex items-center relative top-1">
                <div className="absolute right-[2px] bg-[#F5F5F5] rounded p-[7px]">
                    <img
                        className=" w-[18px] h-[18px] cursor-pointer"
                        src={img}
                        alt=""
                    />
                </div>
                <input
                    type="text"
                    className="border h-9 rounded w-full outline-none pl-3"
                />
            </div>
        </div>
    )
}

export default DiscountInput
