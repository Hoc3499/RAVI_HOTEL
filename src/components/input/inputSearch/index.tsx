import search from "../../../assets/icons/search_FILL0_wght400_GRAD0_opsz48.svg";

interface ProfileProps {
    setOpenModal?: any;
    require?: any;
    label?: string;
    wrapCss?: string;
    inputCss?: string;
    field?: any;
}

const InputSearch = ({ setOpenModal, require, label, wrapCss, inputCss, field }: ProfileProps) => {

    return (
        <div className={`${wrapCss ? `${wrapCss} mr-[15px]` : `mr-[15px]`}`}>
            <label htmlFor="" className="font-light text-xs">{label}</label>
            {require && <span className="text-red-500 ml-1">*</span>}
            <div className={`${inputCss ? `${inputCss} flex items-center relative` : `flex items-center relative mt-[4px]`}`}>
                <div className="absolute right-[2px] bg-[#F5F5F5] rounded p-[10px]">
                    <img
                        className=" w-[18px] h-[18px] cursor-pointer"
                        src={search}
                        alt=""
                        onClick={() => setOpenModal(true)}
                    />
                </div>
                <input
                    {...field}
                    type="text"
                    className="border py-[9px] rounded w-full outline-none pl-3 h-9"
                />
            </div>
        </div>
    )
}

export default InputSearch
