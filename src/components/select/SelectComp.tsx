import React from 'react'
import { Select } from 'antd';

interface Option {
    value: string;
    label: string;
    disable?: boolean;
}

interface SelectProps {
    options?: Option[];
    label: string;
    require?: any;
    wrapCss?: string;
}

const SelectComp = ({ label, options, require, wrapCss }: SelectProps) => {
    const handleChange = () => {
    }
    return (

        <div className={`${wrapCss ? `${wrapCss} flex flex-col mr-4 mb-[15px]` : "flex flex-col mr-4 mb-[15px]"}`}>
            <div className="mb-1" >
                <label htmlFor="">{label}</label>
                {require && <span className="text-red-500 ml-1">*</span>}
            </div>
            <Select
                dropdownStyle={{ color: 'green' }}
                defaultValue="lucy"
                onChange={handleChange}
                options={[
                    { value: 'jack', label: 'a' },
                    { value: 'lucy', label: 'b' },
                    { value: 'Yiminghe', label: 'c' },
                    { value: 'disabled', label: 'd', disabled: true },
                ]}
            />
        </div>

    )
}

export default SelectComp
