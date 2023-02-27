import { Modal } from 'antd';
import done from "../../../assets/icons/done_white_24dp.svg";

import Button from '../../button/Button';
import PackageTableL from '../../table/PackageTableL';
import PackageTableR from '../../table/PackageTableR';

export interface ModalProps {
    openModal?: boolean;
    setOpenModal?: any;
}

const ModalPackage = ({ openModal, setOpenModal }: ModalProps) => {
    return (
        <>
            <Modal
                title="Chọn thêm gói, nhóm gói"
                centered
                open={openModal}
                // onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
                width={"98vw"}
                footer={null}
            >
                <div className="pb-10">
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="">
                            <span className='font-bold text-base'>Danh sách gói/ Nhóm gói có thể mua thêm</span>
                            <PackageTableL />
                        </div>
                        <div className="">
                            <span className='font-bold text-base '>Danh sách gói/ Nhóm gói mua thêm</span>
                            <PackageTableR />
                        </div>
                    </div>
                    <div className={` flex float-right font-bold text-primary`}>
                        <Button label='HỦY' handleClick={() => setOpenModal(false)} wrapCss={`w-[60px] text-primary font-bold hover:bg-[#f7f1e6]`} />
                        <Button src={done} label='Lưu thông tin' wrapCss={`w-[160px]  text-white ml-2 font-bold btn-primary `} />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalPackage
