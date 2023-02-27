import { TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import React from 'react';


interface TimeProps {
    label?: string;
    wrapCss?: string;
    require?: any;
}

const TypeTime = ({ label, wrapCss, require }: TimeProps) => {
    const onChange: any = (time: Dayjs, timeString: string) => {
        console.log(time, timeString)
    };
    return (
        <div className={`${wrapCss ? `${wrapCss} flex flex-col mr-4` : "flex flex-col mr-4 mb-[15px]"}`}>
            <div className="mb-1 text-xs" >
                <label htmlFor="" className='font-light'>{label}</label>
                {require && <span className="text-red-500 ml-1">*</span>}
            </div>
            <TimePicker placeholder='' className="border pl-2 py-[6px] rounded outline-none cursor-pointer" onChange={onChange} />
        </div>
    )
};

export default TypeTime;