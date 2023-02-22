import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import React from 'react';

interface DateProps {
    label: string;
    wrapCss?: string;
    require?: any;
}

const TypeDate = ({ label, wrapCss, require }: DateProps) => {
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <div className={`${wrapCss ? `${wrapCss} flex flex-col mr-4` : "flex flex-col mr-4 mb-[15px]"}`}>
            <div className="mb-1" >
                <label htmlFor="">{label}</label>
                {require && <span className="text-red-500 ml-1">*</span>}
            </div>
            <DatePicker showToday={false} placeholder='' onChange={onChange} className="border pl-2 py-[6px] rounded outline-none cursor-pointer"
                renderExtraFooter={() => (
                    <div className='flex float-right mr-[22px] mb-3' onMouseDown={(e) => e.stopPropagation()}>
                        <button>Hủy</button>
                        <button className='ml-8'>Ok</button>
                    </div>
                )}
            />
        </div>
    )
};

export default TypeDate;