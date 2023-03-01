
interface TypeRadioProps {
    label?: string;
    name?: string;
    checked?: any;
    setChecked?: any;
    field?: any;
    value?: string;
}

const TypeRadio = ({ label, name, checked, setChecked, field, value }: TypeRadioProps) => {
    return (
        <div className="flex items-center text-xs">
            <input type="radio" {...field} value={value} />
            <label className="ml-3 mr-[30px] text-sm" htmlFor="">
                {label}
            </label>
        </div>
    )
}

export default TypeRadio
