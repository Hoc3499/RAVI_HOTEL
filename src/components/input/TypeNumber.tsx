import React from 'react'

interface NumberProps {
    css?: string;
    label?: string;
    wrapCss?: string;
    require?: any;
}


const TypeNumber = ({ css, label, wrapCss, require }: NumberProps) => {
    return (
        <div className={`${wrapCss ? `${wrapCss} flex flex-col mr-4 mb-[13px]` : "flex flex-col mr-4 mb-[13px]"}`}>
            <div className="mb-1" >
                <label htmlFor="">{label}</label>
                {require && <span className="text-red-500 ml-1">*</span>}
            </div>
            <input
                type="number"
                min={0}
                className="border pl-3  h-9 rounded outline-none cursor-default"
            />
        </div>
    )
}

export default TypeNumber
