import { Modal } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import add from "../../../assets/icons/add_FILL0_wght400_GRAD0_opsz48_black.svg";
import cancel from "../../../assets/icons/cancel_FILL0_wght400_GRAD0_opsz48.svg";
import check from "../../../assets/icons/check_circle_FILL0_wght400_GRAD0_opsz48.svg";
import edit from "../../../assets/icons/edit_FILL0_wght400_GRAD0_opsz48_black.svg";
import undo from "../../../assets/icons/undo_FILL0_wght400_GRAD0_opsz48.svg";
import Button from "../../button/Button";
import HeaderTableBookingInfo from "../../header/HeaderTableBookingInfo";
import TableComp from "../../table/TableComp";
import ModalAddComment from "./ModalAddComment";
import ModalEditComment from "./ModalEditComment";


export interface ModalProps {
    openModal?: any;
    setOpenModal?: any;
}

interface DataType {
    number?: string;
    from?: string;
    status?: string;
    content?: string;
    start?: string;
    author?: string;
    note?: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "STT",
        dataIndex: "number",
        key: "number",
        width: "5%",
    },
    {
        title: "Từ",
        dataIndex: "from",
        key: "from",
        width: "10%",
    },
    {
        title: "Người thực hiện",
        key: "author",
        width: "14%",
        dataIndex: "author",
    },
    {
        title: "Thời gian thực hiện",
        key: "start",
        width: "14%",
        dataIndex: "start",
    },
    {
        title: "Trạng thái",
        dataIndex: "status",
        key: "status",
        width: "14%",
    },
    {
        title: "Nội dung",
        dataIndex: "content",
        key: "content",
        width: "21.5%",
    },
    {
        title: "Ghi chú",
        key: "note",
        width: "21.5%",
        dataIndex: "note",
    },
];

const data: DataType[] = [
    {
        number: "1",
        from: "Thành Nam",
        author: "Roy123",
        start: "16/02/2023 - 14:32:33",
        status: "Chưa xủ lý",
        content: "",
        note: "",
    }
];


const ModalComment = ({ openModal, setOpenModal }: ModalProps) => {
    const [openAddComment, setOpenAddComment] = useState(false)
    const [openEditComment, setOpenEditComment] = useState(false)
    return (
        <>
            <Modal
                title="Bình luận"
                style={{ top: -190 }}
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
                                <span className="font-bold text-base">Danh sách bình luận</span>
                            </div>
                            <div className="flex cursor-pointer">
                                <img src={add} alt="" className="w-[20px] h-[20px] " onClick={() => setOpenAddComment(true)} />
                                <img src={edit} alt="" className="w-[20px] h-[20px] mx-4" onClick={() => setOpenEditComment(true)} />
                                <img src={check} alt="" className="w-[20px] h-[20px]" />
                                <img src={cancel} alt="" className="w-[20px] h-[20px] mx-4" />
                                <img src={undo} alt="" className="w-[20px] h-[20px]" />
                            </div>
                        </div>
                        <TableComp columns={columns} data={data} pagination={false} />
                        <ModalAddComment openModal={openAddComment} setOpenModal={setOpenAddComment} />
                        <ModalEditComment openModal={openEditComment} setOpenModal={setOpenEditComment} />
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

export default ModalComment;
