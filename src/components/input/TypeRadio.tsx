
interface TypeRadioProps {
    label?: string;
}

const TypeRadio = ({ label }: TypeRadioProps) => {
    return (
        <div className="flex items-center text-xs">
            <input type="radio" />
            <label className="ml-3 mr-[30px] text-sm" htmlFor="">
                {label}
            </label>
        </div>
    )
}

export default TypeRadio
