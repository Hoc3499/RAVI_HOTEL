import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import add from "../../../../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg";
import article from "../../../../assets/icons/article_FILL0_wght400_GRAD0_opsz48.svg";
import card_membership from "../../../../assets/icons/card_membership_FILL0_wght400_GRAD0_opsz48.svg";
import chat from "../../../../assets/icons/chat_FILL0_wght400_GRAD0_opsz48.svg";
import check from "../../../../assets/icons/check_circle_FILL0_wght400_GRAD0_opsz48.svg";
import comment from "../../../../assets/icons/comment_FILL0_wght400_GRAD0_opsz48.svg";
import content from "../../../../assets/icons/content_copy_FILL0_wght400_GRAD0_opsz48.svg";
import credit_card from "../../../../assets/icons/credit_card_FILL0_wght400_GRAD0_opsz48.svg";
import done from "../../../../assets/icons/done_black_24dp.svg";
import currency_exchange from "../../../../assets/icons/currency_exchange_FILL0_wght400_GRAD0_opsz48.svg";
import create from "../../../../assets/icons/edit_FILL0_wght400_GRAD0_opsz48.svg";
import info from "../../../../assets/icons/info_primary_24dp.svg";
import vert from "../../../../assets/icons/more_vert_FILL0_wght400_GRAD0_opsz48.svg";
import report from "../../../../assets/icons/report_FILL0_wght400_GRAD0_opsz48.svg";
import warning from "../../../../assets/icons/warning_FILL0_wght400_GRAD0_opsz48.svg";

import Button from "../../../../components/button/Button";
import Gender from "../../../../components/gender/Gender";
import HeaderCustomerInfo from "../../../../components/header/HeaderCustomerInfo";
import DiscountInput from "../../../../components/input/DiscountInput";
import InputSearch from "../../../../components/input/inputSearch";
import TextAreaComp from "../../../../components/input/TextAreaComp";
import TypeCheckbox from "../../../../components/input/TypeCheckbox";
import TypeDate from "../../../../components/input/TypeDate";
import TypeNumber from "../../../../components/input/TypeNumber";
import TypeText from "../../../../components/input/TypeText";
import ModalComment from "../../../../components/modal/modalRoom/ModalComment";
import ModalDeposit from "../../../../components/modal/modalRoom/ModalDeposit";
import ModalInfoPackage from "../../../../components/modal/modalRoom/ModalInfoPackage";
import ModalMess from "../../../../components/modal/modalRoom/ModalMess";
import ModalMission from "../../../../components/modal/modalRoom/ModalMission";
import ModalPackage from "../../../../components/modal/modalRoom/ModalPackage";
import ModalRoom from "../../../../components/modal/modalRoom/ModalRoom";
import ModalService from "../../../../components/modal/modalRoom/ModalService";
import ModalVipCard from "../../../../components/modal/modalRoom/ModalVipCard";
import ModalWaring from "../../../../components/modal/modalRoom/ModalWaring";
import SelectComp from "../../../../components/select/SelectComp";
import TableComp from "../../../../components/table/TableComp";
import ModalGroup from "../../../../components/modal/modalRoom/ModalGroup";
import Action from "../../../../components/Action";


interface DataType {
    code?: string;
    qty?: string;
    service?: string;
    fee?: string;
    checkin?: string;
    checkout?: string;
    price?: string;
    money?: string;
    staff?: string;
    note?: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: " Mã dịch vụ",
        dataIndex: "code",
        key: "code",
        width: "6%",
    },
    {
        title: "Tên dịch vụ",
        dataIndex: "service",
        key: "service",
        width: "16%",
    },
    {
        title: "Số lượng",
        dataIndex: "qty",
        key: "qty",
        width: "6%",
    },
    {
        title: "Phí",
        key: "fee",
        width: "9%",
        dataIndex: "fee",
    }, {
        title: "Từ ngày",
        key: "checkin",
        width: "9%",
        dataIndex: "checkin",
    },
    {
        title: "Đến ngày",
        key: "checkout",
        width: "9%",
        dataIndex: "checkout",
    },
    {
        title: "Giá mở",
        key: "price",
        width: "8%",
        dataIndex: "price",
    }, {
        title: "Tiền tệ",
        key: "money",
        width: "7%",
        dataIndex: "money",
    },
    {
        title: "Nhân viên",
        key: "staff",
        width: "15%",
        dataIndex: "staff",
    },
    {
        title: "Ghi chú",
        key: "note",
        width: "15%",
        dataIndex: "note",
    }

];

const data: DataType[] = [
];

const BookingInfo = () => {
    const [openModalRoom, setOpenModalRoom] = useState(false);
    const [openModalPackage, setOpenModalPackage] = useState(false);
    const [openModalDeposit, setOpenModalDeposit] = useState(false);
    const [openModalMisson, setOpenModalMisson] = useState(false);
    const [openModalComment, setOpenModalComment] = useState(false);
    const [openModalWaring, setOpenModalWaring] = useState(false);
    const [openModalMess, setOpenModalMess] = useState(false);

    const [openOption, setOpenOption] = useState(false);
    const [openModalVipCard, setOpenModalVipCard] = useState(false);
    const [openModalService, setOpenModalService] = useState(false);
    const [openModalInfoPackage, setOpenModalInfoPackage] = useState(false);
    const [openModalGroup, setOpenModalGroup] = useState(false);

    return (
        <div className="border ">
            <HeaderCustomerInfo label="Chỉnh sửa thông tin" />
            <div className="grid grid-cols-3 gap-y-5 ml-4 mt-5">
                <InputSearch label="Hồ sơ" require />
                <Gender require />
                <TypeText
                    label="Họ và tên khách"
                    require
                    wrapCss="col-start-1 col-end-2"
                />
                <TypeText label="Số điện thoại" require />
                <TypeText label="Email" require />
            </div>
            <div className="border ml-4 border-y border-x-transparent mt-4 pt-3 pb-4">
                <span className=" font-bold text-xl ">Thông tin đặt phòng</span>
                <div className="grid grid-cols-3 gap-y-5  mt-3">
                    <TypeDate label="Thời gian nhận phòng" require />
                    <SelectComp label="Hạng đặt" require />
                    <InputSearch label="Đoàn/Đoàn phụ" inputCss="mt-[-1px]" setOpenModal={setOpenModalGroup} />
                </div>
                <ModalGroup openModal={openModalGroup} setOpenModal={setOpenModalGroup} />
                <div className="grid grid-cols-6 gap-y-5 ">
                    <TypeDate label="Thời gian trả phòng" require wrapCss="col-span-2" />
                    <SelectComp label="Hạng thực" require wrapCss="col-span-2" />
                    <TypeCheckbox label="Khách Walk-in" />
                    <TypeCheckbox label="Ở dài hạn" />
                </div>
                <div className="grid grid-cols-12 ">
                    <TypeCheckbox label="Đặt nhiều" wrapCss="col-span-2" />
                    <InputSearch
                        label="Phòng"
                        require
                        wrapCss="col-span-2"
                        setOpenModal={setOpenModalRoom}
                        inputCss="mt-[-2px]"
                    />
                    <ModalRoom
                        openModal={openModalRoom}
                        setOpenModal={setOpenModalRoom}
                    />
                    <TypeText label="Số đêm" wrapCss="col-span-2" />
                    <TypeNumber label="NL/TE" />
                    <TypeNumber wrapCss="mt-4" />
                    <TypeCheckbox label="Khóa chuyển phòng" wrapCss="col-span-2" />
                    <TypeCheckbox label="Không thêm dich vụ" wrapCss="col-span-2" />
                </div>
                <div className="grid grid-cols-6">
                    <TypeCheckbox label="Bữa sáng" />
                    <SelectComp require label="Loại bữa sáng" />
                    <SelectComp require label="Trạng thái" wrapCss="col-span-2" />
                    <TypeDate label="Ngày nhắc" wrapCss="col-span-2" />
                </div>
            </div>
            <div className="border border-t-transparent border-b border-x-transparent ml-4 py-3">
                <span className=" font-bold text-xl ">Thống kê</span>
                <div className="grid grid-cols-3">
                    <SelectComp label="Công ty, đại lý du lịch" require />
                    <SelectComp label="Tài khoản công nợ" />
                    <SelectComp label="Phân khúc TT" />
                    <SelectComp label="NV kinh doanh" require />
                    <SelectComp label="Nguồn" />
                </div>
            </div>
            <div className="border grid grid-cols-3 mx-4 border-t-transparent  border-x-transparent mt-1 pt-3">
                <div className="">
                    <span className=" font-bold text-xl ">Giá phòng</span>
                    <div className="grid grid-cols-10 mt-10 mb-6 ">
                        <TypeCheckbox label="Nội bộ" wrapCss="col-span-3" />
                        <TypeCheckbox label="Miễn phí" wrapCss="col-span-3" />
                        <TypeCheckbox label="Không in giá" wrapCss="col-span-4" />
                    </div>
                    <div className="grid grid-cols-2 ">
                        <TypeCheckbox label="NETT" />
                        <SelectComp label="Mã giá" require wrapCss="opacity-50" />
                        <TypeCheckbox label="Tự nhập giá" require />
                        <SelectComp label="Giá tiền" require />
                    </div>
                    <div className="grid grid-cols-4">
                        <TypeCheckbox
                            label="Cập nhật khi C/I"
                            wrapCss="col-span-2"
                            require
                        />
                        <SelectComp label="Tỷ giá" require />
                        <TypeText wrapCss="mt-4" />
                    </div>
                </div>
                <div className="">
                    <span className=" font-bold text-xl ">Giảm giá</span>
                    <div className=" grid grid-cols-1 mt-4">
                        <div className="grid grid-cols-4">
                            <DiscountInput label="Giảm giá" img="percent" />
                            <DiscountInput wrapCss="col-span-3 mt-[22px] " img="money" />
                        </div>
                        <TypeText label="Đêm tính tiền" wrapCss="mt-[21px]" />
                        <TypeText label="Lí do giảm giá" wrapCss="mt-1" />
                    </div>
                </div>
                <div className="">
                    <span className=" font-bold text-xl ">Gói</span>
                    <div className="grid grid-cols-1 ml-8 gap-y-12 mt-12">
                        <div
                            className="relative cursor-pointer"
                            onClick={() => setOpenModalPackage(true)}
                        >
                            <img
                                src={add}
                                alt=""
                                className="w-[20px] h-[20px] absolute top-[2px] -left-8"
                            />
                            <span className={`text-[14px] text-primary`}>Thêm/Sửa</span>
                        </div>
                        <ModalPackage
                            openModal={openModalPackage}
                            setOpenModal={setOpenModalPackage}
                        />
                        <div className="">Gói bổ sung</div>
                        <div className="mt-1">Gói trong mã giá</div>
                        <div className="relative cursor-pointer mt-[-10px]" onClick={() => setOpenModalInfoPackage(true)}>
                            <img
                                src={info}
                                alt=""
                                className="w-[20px] h-[20px] absolute top-[2px] -left-8"
                            />
                            <span className={`text-[14px] text-primary`}>
                                Hiển thị thông tin gói
                            </span>
                        </div>
                        <ModalInfoPackage openModal={openModalInfoPackage} setOpenModal={setOpenModalInfoPackage} />
                    </div>
                </div>
            </div>
            <div className="mt-4 ml-4  pt-3 pb-4">
                <span className=" font-bold text-xl ">Thông tin thanh toán</span>
                <div className="grid grid-cols-3 mt-[10px]">
                    <SelectComp label="Phương thức thanh toán" require />
                    <div className="grid grid-cols-4">
                        <TypeText label="Thẻ tín dụng" wrapCss="col-span-3" require />
                        <TypeText wrapCss={`mt-4`} />
                    </div>
                    <TypeText label="Tên chủ thẻ" />
                </div>
                <TextAreaComp label="Ghi chú" require rows={4} wrapCss="mr-4" />
            </div>
            <div className="">
                <div className="flex justify-between border mx-4 my-4 h-16 items-center relative rounded">
                    <div
                        className={`text-[14px] text-primary border py-2 px-11 ml-2 relative rounded cursor-pointer`}
                        onClick={() => setOpenModalService(true)}
                    >
                        Thêm/ sửa dịch vụ đặc biệt
                        <img
                            src={create}
                            alt=""
                            className="w-[20px] h-[20px] absolute top-2 left-4"
                        />
                    </div>
                    <ModalService openModal={openModalService} setOpenModal={setOpenModalService} />
                    <div className="flex mx-4 cursor-pointer relative">
                        <Action description="Nhiệm vụ" src={report} onClick={() => setOpenModalMisson(true)} />
                        <Action description="Bình luận" src={comment} onClick={() => setOpenModalComment(true)} />
                        <Action description="Báo cáo" src={warning} onClick={() => setOpenModalWaring(true)} />
                        <Action description="Tin nhắn" src={chat} onClick={() => setOpenModalMess(true)} />
                        <Action description="Sao chép" src={content} />
                        <Action description="" src={vert} wrapCss="" onClick={() => setOpenOption(!openOption)} />
                        {/* <img
                            src={report}
                            alt=""
                            className="w-[20px] h-[20px]"
                            onClick={() => setOpenModalMisson(true)}
                        /> */}
                        <ModalMission
                            openModal={openModalMisson}
                            setOpenModal={setOpenModalMisson}
                        />
                        {/* <img
                            src={comment}
                            alt=""
                            className="w-[20px] h-[20px] mx-6"
                            onClick={() => setOpenModalComment(true)}
                        /> */}
                        <ModalComment
                            openModal={openModalComment}
                            setOpenModal={setOpenModalComment}
                        />
                        {/* <img
                            src={warning}
                            alt=""
                            className="w-[20px] h-[20px]"
                            onClick={() => setOpenModalWaring(true)}
                        /> */}
                        <ModalWaring
                            openModal={openModalWaring}
                            setOpenModal={setOpenModalWaring}
                        />
                        {/* <img
                            src={chat}
                            alt=""
                            className="w-[20px] h-[20px] mx-6"
                            onClick={() => setOpenModalMess(true)}
                        /> */}
                        <ModalMess
                            openModal={openModalMess}
                            setOpenModal={setOpenModalMess}
                        />
                        {/* <img
                            src={content}
                            alt=""
                            className="w-[20px] h-[20px]  mr-6 hover:bg-orange-100 rounded-full"
                        />
                        <img
                            src={vert}
                            alt=""
                            className="w-[20px] h-[20px] hover:bg-orange-100 rounded-full"
                            onClick={() => setOpenOption(!openOption)}
                        /> */}
                        {openOption && (
                            <div className="absolute mt-8 right-[-18px] w-[280px] h-[190px] z-[1000] bg-white drop-shadow-lg  ">
                                <div className="flex my-2 py-2 hover:bg-gray-200">
                                    <img
                                        src={article}
                                        alt=""
                                        className="mx-3 w-[20px] h-[20px]"
                                    />
                                    <span>Nhật ký</span>
                                </div>
                                <div
                                    className="flex my-2 py-2 hover:bg-gray-200"
                                    onClick={() => {
                                        return (setOpenModalVipCard(true), setOpenOption(false));
                                    }}
                                >
                                    <img
                                        src={card_membership}
                                        alt=""
                                        className="mx-3  w-[20px] h-[20px]"
                                    />
                                    <span>VIP</span>
                                </div>
                                <div className="flex my-2 py-2 hover:bg-gray-200">
                                    <img src={check} alt="" className="mx-3  w-[20px] h-[20px]" />
                                    <span>Xác nhận đặt phòng</span>
                                </div>
                                <div className="flex my-2 py-2 hover:bg-gray-200">
                                    <img
                                        src={currency_exchange}
                                        alt=""
                                        className="mx-3  w-[20px] h-[20px]"
                                    />
                                    <span>Routing</span>
                                </div>
                            </div>
                        )}
                        <ModalVipCard
                            openModal={openModalVipCard}
                            setOpenModal={setOpenModalVipCard}
                        />
                    </div>
                </div>
                <TableComp columns={columns} data={data} pagination={false} />
            </div>
            <div className=" flex ml-auto float-right my-6 mr-4 ">
                <Button
                    handleClick={() => setOpenModalDeposit(true)}
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
            <ModalDeposit
                openModal={openModalDeposit}
                setOpenModal={setOpenModalDeposit}
            />
        </div>
    );
};

export default BookingInfo;
