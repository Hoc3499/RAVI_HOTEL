import { Modal } from "antd";
import done from "../../../assets/icons/done_white_24dp.svg";
import Button from "../../button/Button";
import HeaderTableBookingInfo from "../../header/HeaderTableBookingInfo";
import TextAreaComp from "../../input/TextAreaComp";
import TypeText from "../../input/TypeText";


export interface ModalProps {
    openModal?: any;
    setOpenModal?: any;
}

const ModalEditComment = ({ openModal, setOpenModal }: ModalProps) => {
    return (
        <>
            <Modal
                title="Sửa nội dung bình luận"
                style={{ top: -135 }}
                centered
                open={openModal}
                // onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
                width={"60vw"}
                footer={null}
            >
                <div className="pb-20">
                    <HeaderTableBookingInfo />
                    <div className="text-base font-bold mb-3">Thông tin bình luận</div>
                    <div className=" grid grid-cols-3 opacity-50">
                        <div className="">
                            <div className=""> <span className="font-light">Người thực hiện:<span className="font-normal"> Roy123</span></span></div>
                            <div className=""> <span className="font-light">Thời gian thực hiện: <span className="font-normal"> 16/02/2023 - 14:32:33</span></span></div>
                            <TypeText require label="Từ" wrapCss={`mt-3`} />
                        </div>
                        <div className="font-light">Trạng thái: <span className="font-normal">Chưa xử lý</span></div>
                    </div>
                    <TextAreaComp label="Nội dung" require rows={4} />
                    <div
                        className={` flex float-right mt-12 font-bold text-primary`}
                    >
                        <Button label='HỦY' handleClick={() => { setOpenModal(false) }} wrapCss={`w-[60px] text-primary  hover:bg-[#f7f1e6]`} />
                        <Button src={done} label='Lưu thông tin' wrapCss={`w-[160px]   text-primary text-white btn-primary ml-2 `} />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ModalEditComment;
