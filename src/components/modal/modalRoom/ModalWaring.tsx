import { Modal } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import add from "../../../assets/icons/add_FILL0_wght400_GRAD0_opsz48_black.svg";
import remove from "../../../assets/icons/delete_black_24dp.svg";
import edit from "../../../assets/icons/edit_FILL0_wght400_GRAD0_opsz48_black.svg";
import Action from "../../Action";
import Button from "../../button/Button";
import HeaderTableBookingInfo from "../../header/HeaderTableBookingInfo";
import TableComp from "../../table/TableComp";
import ModalAddWarning from "./ModalAddWarning";
import ModalEditWaring from "./ModalEditWaring";



export interface ModalProps {
    openModal?: boolean;
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
        width: "7%",
    },
    {
        title: "Mã cảnh báo",
        dataIndex: "code",
        key: "code",
        width: "31%",
    },
    {
        title: "Hiển thị cảnh báo",
        dataIndex: "display",
        key: "display",
        width: "31%",
    },
    {
        title: "Nội dung",
        dataIndex: "content",
        key: "content",
        width: "31%",
    }
];

const data: DataType[] = [
];

const ModalWaring = ({ openModal, setOpenModal }: ModalProps) => {
    const [openAddWarning, setOpenAddWarning] = useState(false)
    const [openEditWarning, setOpenEditWarning] = useState(false)
    return (
        <>
            <Modal
                title="Cảnh báo"
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
                                <span className="font-bold text-base">Danh sách cảnh báo</span>
                            </div>
                            <div className="flex cursor-pointer">
                                {/* <img src={add} alt="" className="w-[20px] h-[20px] " onClick={() => setOpenAddWarning(true)} />
                                <img src={edit} alt="" className="w-[20px] h-[20px] mx-4" onClick={() => setOpenEditWarning(true)} />
                                <img src={remove} alt="" className="w-[20px] h-[20px]" /> */}
                                <Action description="Thêm mới cảnh báo" src={add} css="w-[100px]" onClick={() => setOpenAddWarning(true)} />
                                <Action description="Sửa thông tin cảnh báo" src={edit} css="w-[115px]" onClick={() => setOpenEditWarning(true)} />
                                <Action description="Xóa cảnh báo" src={remove} css="w-[70px]" />
                            </div>
                            <ModalAddWarning openModal={openAddWarning} setOpenModal={setOpenAddWarning} />
                            <ModalEditWaring openModal={openEditWarning} setOpenModal={setOpenEditWarning} />
                        </div>
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

export default ModalWaring;
