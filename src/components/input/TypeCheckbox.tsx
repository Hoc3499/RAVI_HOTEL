
interface CheckboxProps {
    css?: string;
    label: string;
    wrapCss?: string;
    require?: any;
}

const TypeCheckbox = ({ css, label, wrapCss, require }: CheckboxProps) => {
    return (
        <div className={`${wrapCss ? `${wrapCss} flex items-center` : `flex items-center`} `}>
            <input type="checkbox" className={` ${css}`} />
            <div className="ml-3 mr-[30px] text-sm" >
                <label htmlFor="">{label}</label>
                {require && <span className="text-red-500 ml-1">*</span>}
            </div>
        </div>
    )
}

export default TypeCheckbox
