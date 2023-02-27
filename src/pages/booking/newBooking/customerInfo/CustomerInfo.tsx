import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import add from "../../../../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg";
import cancel from "../../../../assets/icons/cancel_FILL0_wght400_GRAD0_opsz48.svg";
import connecting_airports from "../../../../assets/icons/connecting_airports_black_24dp.svg";
import credit_card from "../../../../assets/icons/credit_card_FILL0_wght400_GRAD0_opsz48.svg";
import done from "../../../../assets/icons/done_black_24dp.svg";
import rename from "../../../../assets/icons/drive_file_rename_outline_FILL0_wght400_GRAD0__opsz48.svg";
import person from "../../../../assets/icons/person_pin_FILL0_wght400_GRAD0_opsz48.svg";
import Button from "../../../../components/button/Button";
import Gender from "../../../../components/gender/Gender";
import HeaderCustomerInfo from "../../../../components/header/HeaderCustomerInfo";
import InputSearch from "../../../../components/input/inputSearch";
import TextAreaComp from "../../../../components/input/TextAreaComp";
import TypeCheckbox from "../../../../components/input/TypeCheckbox";
import TypeDate from "../../../../components/input/TypeDate";
import TypeText from "../../../../components/input/TypeText";
import ModalCustomer from "../../../../components/modal/modalCustomer/ModalCustomer";
import SelectComp from "../../../../components/select/SelectComp";
import TableComp from "../../../../components/table/TableComp";

interface DataType {
    status?: string;
    customer?: any;
    name?: string;
    checkin?: string;
    checkout?: string;
    phone?: string;
    email?: string;
    address?: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: " Trạng thái khách",
        dataIndex: "status",
        key: "status",
        width: "9%",
    },
    {
        title: "Khách chính",
        dataIndex: "customer",
        key: "customer",
        width: "7%",
    },
    {
        title: "Họ và tên",
        dataIndex: "name",
        key: "name",
        width: "14%",
    },
    {
        title: "Ngày đến",
        key: "checkin",
        width: "12.5%",
        dataIndex: "checkin",
    },
    {
        title: "Ngày đi",
        key: "checkout",
        width: "12.5%",
        dataIndex: "checkout",
    },
    {
        title: "SĐT",
        key: "phone",
        width: "13%",
        dataIndex: "phone",
    },
    {
        title: "Địa chỉ email",
        key: "email",
        width: "13%",
        dataIndex: "email",
    },
    {
        title: "Địa chỉ nơi ở ",
        key: "address",
        width: "19%",
        dataIndex: "address",
    },
];

const data: DataType[] = [];

const CustomerInfo = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col border rounded">
            <HeaderCustomerInfo label="Chỉnh sửa thông tin khách đặt" />
            <div className=" grid grid-cols-4 ">
                <div className=" mt-4 ml-4 ">
                    <div className="box w-[calc(100%-16px)] h-[202.5px] bg-[#F3F3F3] rounded mb-4"></div>
                    <div className="box w-[calc(100%-16px)] h-[202.5px] bg-[#F3F3F3] rounded"></div>
                </div>
                <div className=" col-span-3 mt-[13px] text-xs">
                    <div className="  grid grid-cols-3  mb-5">
                        <InputSearch label="Hồ sơ" setOpenModal={setOpenModal} />
                        <ModalCustomer openModal={openModal} setOpenModal={setOpenModal} />
                        <TypeText label="Họ và tên" require />
                        <TypeDate label="Ngày sinh" />
                        <Gender />
                        <div className="type">
                            <div className="">
                                <span className="text-xs ">Loại khách</span>
                                <div className="flex mt-[11px]">
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
                        <div className=" flex flex-col border mr-4 mb-[15px] mt-[20px] bg-[#25252514] font-[500] cursor-pointer relative">
                            <div onClick={handleClick}>
                                <div className="  py-[7px] rounded text-sm ml-[30px] text-center">
                                    Thông tin xuất nhập cảnh
                                </div>
                                <img
                                    className="absolute left-3 top-1 pr-2"
                                    src={connecting_airports}
                                    alt=""
                                />
                            </div>
                            {isOpen && (
                                <div className="pu absolute w-[250%] h-[419px] mt-10 bg-white drop-shadow-lg z-[100] ">
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
                                    <div
                                        className={` flex absolute right-0 mr-4 bottom-3 font-bold text-primary`}
                                    >
                                        <Button
                                            label="HỦY"
                                            handleClick={() => setIsOpen(false)}
                                            wrapCss={`w-[60px] text-primary  hover:bg-[#f7f1e6]`}
                                        />
                                        <Button
                                            src={done}
                                            label="Lưu thông tin"
                                            wrapCss={`w-[160px]  text-primary ml-2  bg-[#ece3d5] opacity-50`}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                        <TypeText label="Số điện thoại" require />
                        <TypeText label="Email" />
                        <TypeText label="Số CCCD" require />
                        <TypeDate label="Ngày cấp CCCD" require />
                        <TypeText label="Nơi cấp CCCD" require />
                    </div>
                    <div className="mb-4 mr-4">
                        <TextAreaComp label="Lưu ý" rows={5} />
                    </div>
                </div>
            </div>
            <div className="mx-4 border ">
                <div className="flex justify-between border mx-4 my-4 h-10 items-center opacity-40">
                    <div className="relative mx-12">
                        <img
                            src={add}
                            alt=""
                            className="w-[20px] h-[20px] absolute top-[2px] -left-8"
                        />
                        <span className={`text-[14px] text-primary`}>Thêm khách mới</span>
                    </div>
                    <div className="flex mx-4">
                        <img src={person} alt="" className="w-[20px] h-[20px]" />
                        <img src={cancel} alt="" className="w-[20px] h-[20px] mx-6" />
                        <img src={rename} alt="" className="w-[20px] h-[20px]" />
                    </div>
                </div>
                <TableComp columns={columns} data={data} pagination={false} />
            </div>
            <div className=" flex ml-auto  my-6 mr-4 ">
                <Button
                    label="Đặt cọc"
                    src={credit_card}
                    wrapCss={`w-[120px] text-[14px] text-primary font-bold hover:bg-[#f7f1e6]`}
                />
                <Button
                    src={done}
                    label="Lưu thông tin"
                    wrapCss={`w-[160px] text-[14px] ml-2 text-primary  font-bold bg-[#ece3d5] opacity-50`}
                />
            </div>
        </div>
    );
};

export default CustomerInfo;
