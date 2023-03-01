import { useState } from "react";
import TypeRadio from "../input/TypeRadio";

interface Props {
    require?: any;
    field?: any;
}

const Gender = ({ require, field }: Props) => {
    const [checked, setChecked] = useState("male")
    return (
        <div className="">
            <span className="text-xs font-light">Giới tính</span>
            {require && <span className="text-red-500 ml-1">*</span>}
            <div className="flex font-normal mt-[11px]">
                <TypeRadio field={field} label="Nam" name="male" checked={checked} setChecked={setChecked} />
                <TypeRadio field={field} label="Nữ" name="female" checked={checked} setChecked={setChecked} />
            </div>
        </div>
    )
}

export default Gender
