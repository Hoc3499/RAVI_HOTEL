import search from "../../../assets/icons/search_FILL0_wght400_GRAD0_opsz48.svg";

interface ProfileProps {
    setOpenModal?: any;
    require?: any;
    label?: string;
    wrapCss?: string;
}

const Profile = ({ setOpenModal, require, label, wrapCss }: ProfileProps) => {

    return (
        <div className={`${wrapCss ? `${wrapCss} mr-[15px]` : `mr-[15px]`}`}>
            <label htmlFor="" className="">{label}</label>
            {require && <span className="text-red-500 ml-1">*</span>}
            <div className="input flex items-center relative top-1">
                <div className="absolute right-[2px] bg-[#F5F5F5] rounded p-[7px]">
                    <img
                        className=" w-[18px] h-[18px] cursor-pointer"
                        src={search}
                        alt=""
                        onClick={() => setOpenModal(true)}
                    />
                </div>
                <input
                    type="text"
                    className="border py-[9px] rounded w-full outline-none pl-3"
                />
            </div>
        </div>
    )
}

export default Profile
