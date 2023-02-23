
interface TypeRadioProps {
    require?: any;
}

const TypeRadio = ({ require }: TypeRadioProps) => {
    return (
        <div className="">
            <span className="text-xs">Giới tính</span>
            {require && <span className="text-red-500 ml-1">*</span>}
            <div className="flex font-normal mt-[11px]">
                <div className="flex items-center">
                    <input type="radio" />
                    <label className="ml-3 mr-[30px] text-sm" htmlFor="">
                        Nam
                    </label>
                </div>
                <div className="flex items-center">
                    <input type="radio" />
                    <label className="ml-3 text-sm " htmlFor="">
                        Nữ
                    </label>
                </div>
            </div>
        </div>
    )
}

export default TypeRadio
