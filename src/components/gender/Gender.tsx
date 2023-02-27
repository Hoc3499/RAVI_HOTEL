import TypeRadio from "../input/TypeRadio";

interface TypeRadioProps {
    require?: any;
}

const Gender = ({ require }: TypeRadioProps) => {
    return (
        <div className="">
            <span className="text-xs font-light">Giới tính</span>
            {require && <span className="text-red-500 ml-1">*</span>}
            <div className="flex font-normal mt-[11px]">
                <TypeRadio label="Nam" />
                <TypeRadio label="Nữ" />
            </div>
        </div>
    )
}

export default Gender
