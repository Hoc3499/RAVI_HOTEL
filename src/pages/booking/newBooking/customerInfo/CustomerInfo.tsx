import { Input } from "antd";
import card_travel from "../../../../assets/icons/card_travel_black_24dp.svg";
import connecting_airports from "../../../../assets/icons/connecting_airports_black_24dp.svg";
import done from "../../../../assets/icons/done_black_24dp.svg";
import { useState } from "react";
import Profile from "../../../../components/input/profile";
import TypeText from "../../../../components/input/TypeText";
import TypeDate from "../../../../components/input/TypeDate";
import TypeRadio from "../../../../components/input/TypeRadio";
import TypeCheckbox from "../../../../components/input/TypeCheckbox";
import SelectComp from "../../../../components/select/SelectComp";
import { COLORS } from "../../../../constants/colors";
import ModalComp from "../../../../components/modal";
import HeaderCustomerInfo from "../../../../components/headerCI";


const CustomerInfo = () => {
    const { TextArea } = Input;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex flex-col border rounded">
            <HeaderCustomerInfo />
            <div className=" grid grid-cols-4 ">
                <div className=" mt-4 ml-4 ">
                    <div className="box w-[calc(100%-16px)] h-[202.5px] bg-[#F3F3F3] rounded mb-4"></div>
                    <div className="box w-[calc(100%-16px)] h-[202.5px] bg-[#F3F3F3] rounded"></div>
                    <img src={card_travel} alt="card_travel" />
                </div>
                <div className=" col-span-3 mt-[13px] text-xs">
                    <div className="  grid grid-cols-3  mb-5">
                        <Profile label="Hồ sơ" setOpenModal={setOpenModal} />
                        {openModal && <ModalComp openModal={openModal} setOpenModal={setOpenModal} />}
                        <TypeText label="Họ và tên" require />
                        <TypeDate label="Ngày sinh" />
                        <TypeRadio />
                        <div className="type">
                            <div className="">
                                <span className="text-xs ">Loại khách</span>
                                <div className="flex font-bold mt-[11px]">
                                    <TypeCheckbox label="Khách chính" />
                                    <TypeCheckbox label="Trẻ em" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" grid grid-cols-3">
                        <SelectComp label="Hạng khách" />
                        <TypeDate label="Ngày đến" />
                        <TypeDate label="Ngày đi" />
                        <div className=" flex flex-col border mr-4 mb-[15px] mt-[20px] bg-[#25252514] font-[500] cursor-pointer relative" >
                            <div onClick={handleClick}>
                                <div className="  py-[7px] rounded text-sm ml-[30px] text-center" >
                                    Thông tin xuất nhập cảnh
                                </div>
                                <img
                                    className="absolute left-3 top-1 pr-2"
                                    src={connecting_airports}
                                    alt=""
                                />
                            </div>
                            {isOpen && <div className="pu absolute w-[250%] h-[419px] mt-10 bg-white drop-shadow-lg z-[100] ">
                                <div className="ml-4 my-4  grid grid-cols-2">
                                    <TypeText label="Loại Visa" />
                                    <TypeText label="Nơi cấp" />
                                    <TypeDate label="Ngày cấp" />
                                    <TypeText label="Nghề nghiệp" />
                                    <TypeText label="Mục đích" />
                                    <TypeText label="Nhập từ" />
                                    <TypeDate label="Ngày nhập từ" />
                                    <TypeDate label="Ngày nhập đến" />
                                    <SelectComp label="Cổng vào" />
                                    <TypeText label="Loại hộ chiếu" />
                                </div>
                                <div className={` flex absolute right-0 mr-4 bottom-3 font-bold text-[${COLORS.primaryColor}]`}>
                                    <button className=" rounded h-9 mr-2 px-2 hover:bg-[#fff8ee]" onClick={() => setIsOpen(false)}>Đóng</button>
                                    <div className="flex relative hover:bg-[#fff8ee] rounded px-5">
                                        <img src={done} alt="" className="absolute left-2 top-[10px] w-4 h-4" />
                                        <button className="ml-[10px]">Lưu thông tin</button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <TypeText label="Số điện thoại" require />
                        <TypeText label="Email" />
                        <TypeText label="Số CCCD" require />
                        <TypeDate label="Ngày cấp CCCD" require />
                        <TypeText label="Nơi cấp CCCD" require />
                    </div>
                    <div className="mb-4 mr-4">
                        <span className="mb-1">Lưu ý</span>
                        <TextArea rows={6} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CustomerInfo;