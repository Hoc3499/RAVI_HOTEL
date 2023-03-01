import { Modal } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import add from "../../../assets/icons/add_FILL0_wght400_GRAD0_opsz48_black.svg";
import cancel from "../../../assets/icons/cancel_FILL0_wght400_GRAD0_opsz48.svg";
import edit from "../../../assets/icons/edit_FILL0_wght400_GRAD0_opsz48_black.svg";
import print from "../../../assets/icons/print_FILL0_wght400_GRAD0_opsz48.svg";
import send from "../../../assets/icons/send_FILL0_wght400_GRAD0_opsz48.svg";
import Action from "../../Action";
import Button from "../../button/Button";
import HeaderTableBookingInfo from "../../header/HeaderTableBookingInfo";
import TableComp from "../../table/TableComp";
import ModalAddMess from "./ModalAddMess";
import ModalEditMess from "./ModalEditMess";


export interface ModalProps {
    openModal?: any;
    setOpenModal?: any;
}

interface DataType {
    number?: string;
    department?: string;
    status?: string;
    content?: string;
    start?: string;
    author?: string;
    end?: string;

}

const columns: ColumnsType<DataType> = [
    {
        title: "STT",
        dataIndex: "number",
        key: "number",
        width: "5%",
    },
    {
        title: "Người gửi",
        dataIndex: "from",
        key: "from",
        width: "15%",
    },
    {
        title: "Người tạo",
        dataIndex: "creater",
        key: "creater",
        width: "15%",
    },
    {
        title: "Thời gian tạo",
        dataIndex: "date",
        key: "date",
        width: "15%",
    },
    {
        title: "Trạng thái",
        dataIndex: "status",
        key: "status",
        width: "10%",
    },
    {
        title: "Nội dung",
        dataIndex: "content",
        key: "content",
        width: "20%",
    }
];

const data: DataType[] = [
];


const ModalMess = ({ openModal, setOpenModal }: ModalProps) => {
    const [openAddMess, setOpenAddMess] = useState(false)
    const [openEditMess, setOpenEditMess] = useState(false)
    return (
        <>
            <Modal
                title="Tin nhắn"
                style={{ top: -200 }}
                centered
                open={openModal}
                // onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
                width={"80vw"}
                footer={null}
            >
                <div className="pb-20">
                    <HeaderTableBookingInfo />
                    <div className="border rounded">
                        <div className="flex justify-between mx-2 py-2">
                            <div className="">
                                <span className="font-bold text-base">Thông tin tin nhắn</span>
                            </div>
                            <div className="flex cursor-pointer">
                                {/* <img src={add} alt="" className="w-[20px] h-[20px] " onClick={() => setOpenAddMess(true)} />
                                <img src={edit} alt="" className="w-[20px] h-[20px] mx-4" onClick={() => setOpenEditMess(true)} />
                                <img src={send} alt="" className="w-[20px] h-[20px]" />
                                <img src={cancel} alt="" className="w-[20px] h-[20px] mx-4" />
                                <img src={print} alt="" className="w-[20px] h-[20px]" /> */}
                                <Action description="Thêm tin nhắn" src={add} css="w-[70px]" onClick={() => setOpenAddMess(true)} />
                                <Action description="Sửa tin nhắn" src={edit} css="w-[65px]" onClick={() => setOpenEditMess(true)} />
                                <Action description="Gửi tin nhắn" src={send} css="w-[65px]" />
                                <Action description="Hủy tin nhắn" src={cancel} css="w-[65px]" />
                                <Action description="In tin nhắn (Ctrl+P)" src={print} css="w-[95px]" />
                            </div>
                        </div>
                        <ModalAddMess openModal={openAddMess} setOpenModal={setOpenAddMess} />
                        <ModalEditMess openModal={openEditMess} setOpenModal={setOpenEditMess} />
                        <TableComp columns={columns} data={data} pagination={false} />
                    </div>
                    <div
                        className={` flex float-right mt-12 font-bold text-primary`}
                    >
                        <Button
                            label="ĐÓNG"
                            handleClick={() => setOpenModal(false)}
                            wrapCss={`w-[60px] text-primary hover:bg-[#f7f1e6]`}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ModalMess;
