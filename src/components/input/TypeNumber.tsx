import React from 'react'

interface NumberProps {
    css?: string;
    label?: string;
    wrapCss?: string;
    require?: any;
    field?: any;
}


const TypeNumber = ({ css, label, wrapCss, require, field }: NumberProps) => {
    return (
        <div className={`${wrapCss ? `${wrapCss} flex flex-col mr-4 mb-[13px]` : "flex flex-col mr-4 mb-[13px]"}`}>
            <div className="mb-1 text-xs" >
                <label htmlFor="" className='font-light'>{label}</label>
                {require && <span className="text-red-500 ml-1">*</span>}
            </div>
            <input
                type="number"
                min={0}
                {...field}
                className="border pl-3  h-9 rounded outline-none cursor-default"
            />
        </div>
    )
}

export default TypeNumber
