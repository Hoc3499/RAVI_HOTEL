import { Modal } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import add from "../../../assets/icons/add_FILL0_wght400_GRAD0_opsz48_black.svg";
import cancel from "../../../assets/icons/cancel_FILL0_wght400_GRAD0_opsz48.svg";
import check from "../../../assets/icons/check_circle_FILL0_wght400_GRAD0_opsz48.svg";
import info from "../../../assets/icons/info_black_24dp.svg";
import undo from "../../../assets/icons/undo_FILL0_wght400_GRAD0_opsz48.svg";
import Action from "../../Action";
import Button from "../../button/Button";
import HeaderTableBookingInfo from "../../header/HeaderTableBookingInfo";
import TableComp from "../../table/TableComp";
import ModalAddMission from "./ModalAddMission";
import ModalInfoMission from "./ModalInfoMission";


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
        width: "5%",
    },
    {
        title: "Bộ phận ",
        dataIndex: "department",
        key: "department",
        width: "15%",
    },
    {
        title: "Trạng thái",
        dataIndex: "status",
        key: "status",
        width: "15%",
    },
    {
        title: "Nội dung",
        dataIndex: "content",
        key: "content",
        width: "20%",
    },
    {
        title: "Thời gian thực hiện",
        key: "start",
        width: "15%",
        dataIndex: "start",
    }, {
        title: "Người thực hiện",
        key: "author",
        width: "15%",
        dataIndex: "author",
    },
    {
        title: "Thời gian hoàn thành",
        key: "end",
        width: "15%",
        dataIndex: "end",
    }
];

const data: DataType[] = [
];


const ModalMission = ({ openModal, setOpenModal }: ModalProps) => {
    const [openAddMission, setOpenAddMission] = useState(false)
    const [openInfoMission, setOpenInfoMission] = useState(false)
    return (
        <>
            <Modal
                title="Nhiệm vụ"
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
                                <span className="font-bold text-base">Danh sách nhiệm vụ</span>
                            </div>
                            <div className="flex cursor-pointer">
                                {/* <img src={add} alt="" className="w-[20px] h-[20px] " onClick={() => setOpenAddMission(true)} />
                                <img src={info} alt="" className="w-[20px] h-[20px] mx-4" onClick={() => setOpenInfoMission(true)} />
                                <img src={check} alt="" className="w-[20px] h-[20px]" />
                                <img src={cancel} alt="" className="w-[20px] h-[20px] mx-4" />
                                <img src={undo} alt="" className="w-[20px] h-[20px]" /> */}
                                <Action description="Thêm mới nhiệm vụ" src={add} css="w-[100px]" onClick={() => setOpenAddMission(true)} />
                                <Action description="Chi tiết nhiệm vụ" src={info} css="w-[85px]" onClick={() => setOpenInfoMission(true)} />
                                <Action description="Hoàn thành" src={check} />
                                <Action description="Hủy nhiệm vụ" src={cancel} css="w-[70px]" />
                                <Action description="Hoàn tác" src={undo} />
                            </div>
                        </div>
                        <TableComp columns={columns} data={data} pagination={false} />
                    </div>
                    <ModalAddMission openModal={openAddMission} setOpenModal={setOpenAddMission} />
                    <ModalInfoMission openModal={openInfoMission} setOpenModal={setOpenInfoMission} />
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

export default ModalMission;
