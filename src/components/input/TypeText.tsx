import React from 'react'
import info from "../../assets/icons/info_red_24dp.svg"

interface TextProps {
    label?: string;
    require?: any;
    wrapCss?: any;
    field?: any;
    error?: any;
}

const TypeText = ({ label, require, wrapCss, field, error }: TextProps) => {
    return (
        <div className={`${wrapCss ? `${wrapCss} flex flex-col mr-4 mb-[13px] relative` : "flex flex-col mr-4 mb-[13px] relative"}`}>
            <div className="mb-1 text-xs" >
                <label htmlFor="" className='font-light'>{label}</label>
                {require && <span className="text-red-500 ml-1">*</span>}
            </div>
            <input
                type="text"
                className={`${error ? `border border-red-500 pl-3  h-9 rounded outline-none cursor-default` : `border pl-3  h-9 rounded outline-none cursor-default`}`}
                {...field}
            />
            {/* {error && <img src={info} alt="" className='absolute right-2 top-[26px]' />} */}
        </div>
    )
}

export default TypeText
