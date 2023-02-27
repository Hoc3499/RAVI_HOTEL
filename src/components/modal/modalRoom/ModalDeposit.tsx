import { Modal } from 'antd';
import done from "../../../assets/icons/done_black_24dp.svg";
import Button from '../../button/Button';
import TextAreaComp from '../../input/TextAreaComp';
import TypeText from '../../input/TypeText';
import TypeTime from '../../input/TypeTime';
import SelectComp from '../../select/SelectComp';

export interface ModalProps {
    openModal?: boolean;
    setOpenModal?: any;
}

const ModalDeposit = ({ openModal, setOpenModal }: ModalProps) => {
    return (
        <>
            <Modal
                title="Đặt cọc đặt phòng 33064"
                style={{ top: -200 }}
                centered
                open={openModal}
                // onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
                width={"98vw"}
                footer={null}
            >
                <div className="pb-20">
                    <div className="grid grid-cols-4">
                        <TypeText label='Tên khách' />
                        <TypeText label='Thu ngân' />
                        <TypeTime label='Thời gian' />
                        <SelectComp label='Phương thức thanh toán' />
                        <SelectComp label='Trang giao dịch' require />
                        <SelectComp label='Loại' require />
                        <TypeText label='Số tiền đặt cọc' />
                        <TypeText label='Số dư còn lại' wrapCss={`text-primary`} />

                    </div>
                    <TextAreaComp label='Ghi chú' require rows={4} />
                    {/* <div className="footer flex float-right w-[12%] cursor-pointer mt-12" >
                        <div className={`h-9 font-bold leading-9 px-2 text-primary rounded hover:bg-[#f7f1e6]`} onClick={() => setOpenModal(false)}>HỦY</div>
                        <div className={`relative border rounded mx-2 text-primary w-[100%] h-9 text-center leading-9 bg-[#ece3d5] opacity-50`}>
                            <span className="ml-5 font-bold" >
                                Chọn phòng
                            </span>
                            <img
                                className="absolute top-[10px] left-3 w-[18px] h-[18px] "
                                src={done}
                                alt=""
                            />
                        </div>
                    </div> */}
                    <div className={` flex float-right mt-12 font-bold text-primary`}>
                        <Button label='HỦY' handleClick={() => setOpenModal(false)} wrapCss={`w-[60px] text-primary hover:bg-[#f7f1e6]`} />
                        <Button src={done} label='Chọn phòng' wrapCss={`w-[160px]  text-primary ml-2 bg-[#ece3d5] opacity-50`} />
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default ModalDeposit
