import { Modal } from "antd";
import done from "../../../assets/icons/done_white_24dp.svg";
import Button from "../../button/Button";
import HeaderTableBookingInfo from "../../header/HeaderTableBookingInfo";
import TextAreaComp from "../../input/TextAreaComp";
import TypeRadio from "../../input/TypeRadio";
import TypeText from "../../input/TypeText";
import SelectComp from "../../select/SelectComp";


export interface ModalProps {
    openModal?: any;
    setOpenModal?: any;
}

const ModalEditMess = ({ openModal, setOpenModal }: ModalProps) => {
    return (
        <>
            <Modal
                title="Thêm thông tin nhiệm vụ"
                style={{ top: -150 }}
                centered
                open={openModal}
                // onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
                width={"70vw"}
                footer={null}
            >
                <div className="pb-20">
                    <HeaderTableBookingInfo />
                    <div className="text-base font-bold mb-3">Thông tin nhiệm vụ</div>
                    <div className=" grid grid-cols-3 opacity-50">
                        <SelectComp label="Người gửi" require />
                        <TypeText label="Số điện thoại" />
                    </div>
                    <div className="">
                        <span className="font-light ">Mục đích</span>
                        <div className="flex my-2">
                            <TypeRadio label="Thông tin" />
                            <TypeRadio label="Gọi khẩn cấp" />
                            <TypeRadio label="Sẽ gọi lại" />
                            <TypeRadio label="Yêu cầu gọi lại" />
                        </div>
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

export default ModalEditMess;
