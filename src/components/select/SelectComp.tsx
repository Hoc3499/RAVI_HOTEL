import { Select } from 'antd';

interface Option {
    value: string;
    label: string;
    disable?: boolean;
}

interface SelectProps {
    options?: Option[];
    label?: string;
    require?: any;
    wrapCss?: string;
    form?: any;
    selectLabel?: string;
    error?: any;
}

const SelectComp = ({ label, options, require, wrapCss, form, selectLabel, error }: SelectProps) => {

    return (

        <div className={`${wrapCss ? `${wrapCss} flex flex-col mr-4 mb-[15px]` : "flex flex-col mr-4 mb-[15px]"}`}>
            <div className="mb-1 text-xs" >
                <label htmlFor="" className='font-light'>{label}</label>
                {require && <span className="text-red-500 ml-1">*</span>}
            </div>
            <Select
                onChange={(value) => form.setFieldValue(selectLabel, value)}
                defaultValue="lucy"
                options={[
                    { value: 'jack', label: 'a' },
                    { value: 'lucy', label: 'b' },
                    { value: 'Yiminghe', label: 'c' },
                    { value: 'disabled', label: 'd', disabled: true },
                ]}
                className={`${error ? "border border-red-500" : ""}`}
            />
        </div>

    )
}

export default SelectComp
