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

const ModalAddComment = ({ openModal, setOpenModal }: ModalProps) => {
    return (
        <>
            <Modal
                title="Thêm nội dung bình luận"
                style={{ top: -175 }}
                centered
                open={openModal}
                // onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
                width={"60vw"}
                footer={null}
            >
                <div className="pb-20">
                    <HeaderTableBookingInfo />
                    <div className=" grid grid-cols-3 ">
                        <div className="col-span-1">
                            <div className="text-base font-bold mb-3">Thông tin bình luận</div>
                            <TypeText require label="Từ" />
                        </div>
                    </div>
                    <TextAreaComp label="Nội dung" require rows={4} />
                    <div
                        className={` flex float-right mt-12 font-bold text-primart`}
                    >
                        <Button label='HỦY' handleClick={() => { setOpenModal(false) }} wrapCss={`w-[60px] text-primart  hover:bg-[#f7f1e6]`} />
                        <Button src={done} label='Lưu thông tin' wrapCss={`w-[160px]   text-primart text-white btn-primary ml-2 `} />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ModalAddComment;
