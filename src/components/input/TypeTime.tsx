import { TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import React from 'react';


interface TimeProps {
    label?: string;
    wrapCss?: string;
    require?: any;
    form?: any;
    nameInput?: any;
}

const TypeTime = ({ label, wrapCss, require, form, nameInput }: TimeProps) => {

    return (
        <div className={`${wrapCss ? `${wrapCss} flex flex-col mr-4` : "flex flex-col mr-4 mb-[15px]"}`}>
            <div className="mb-1 text-xs" >
                <label htmlFor="" className='font-light'>{label}</label>
                {require && <span className="text-red-500 ml-1">*</span>}
            </div>
            <TimePicker placeholder='' onChange={(time, timeString) => form.setFieldValue(nameInput, timeString)} className="border pl-2 py-[6px] rounded outline-none cursor-pointer" />
        </div>
    )
};

export default TypeTime;