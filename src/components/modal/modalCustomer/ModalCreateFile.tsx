import { Modal } from 'antd';
import done from "../../../assets/icons/done_black_24dp.svg";
import Button from '../../button/Button';
import Gender from '../../gender/Gender';
import TextAreaComp from '../../input/TextAreaComp';
import TypeDate from '../../input/TypeDate';
import TypeText from '../../input/TypeText';
import SelectComp from '../../select/SelectComp';

interface ModalProps {
    open?: boolean;
    setOpen?: any;
}

const ModalCreateFile = ({ open, setOpen }: ModalProps) => {
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Modal
            title="Thêm hồ sơ 21345"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={"98vw"}
            bodyStyle={{ height: "660px" }}
            footer={null}
            className="modal-create-file"
        >
            <div className="border rounded py-4 pl-4">
                <div className="form grid grid-cols-4 mb-5   ">
                    <div className="avatar">
                        <div className="grid grid-cols-2">
                            <div className="box w-[calc(100%-16px)] h-[126px] bg-[#F3F3F3] rounded"></div>
                            <div className="box w-[calc(100%-16px)] h-[126px] bg-[#F3F3F3] rounded"></div>
                        </div>
                        <div className="mt-[26px]">
                            <TypeText label='Họ và tên khách' require />
                            <Gender />
                            <TypeDate label='Ngày sinh' wrapCss='mt-[26px]' />
                        </div>
                    </div>
                    <div className="col-span-3 grid grid-cols-3">
                        <TypeText label='Số điện thoại' />
                        <TypeText label="Địa chỉ email" />
                        <SelectComp label='Hạng khách' />
                        <TypeText label="ID thành viên" />
                        <TypeText label="Địa chỉ 1" />
                        <TypeText label="Địa chỉ 2" />
                        <TypeText label="Phường, xã" />
                        <TypeText label="Quận, Huyện" />
                        <SelectComp label="Tỉnh, thành phố" />
                        <TypeText label='Hộ chiếu/ Visa' />
                        <TypeDate label='Ngày cấp' />
                        <TypeText label="Nơi cấp" />
                        <TypeText label="CCCD/ CMND" />
                        <TypeDate label='Ngày cấp CCCD/ CMND' />
                        <TypeText label="Nơi cấp CCCD/ CMND" />
                    </div>
                </div>
                <TextAreaComp label='Ghi chú' rows={4} wrapCss="mr-4" />
                <div className="flex justify-between">
                    <div className=""> </div>
                    <div className="footer mt-14 mr-4 flex cursor-pointer" >
                        <Button label='HỦY' handleClick={handleClose} wrapCss={`w-[60px] text-primary font-bold hover:bg-[#f7f1e6]`} />
                        <Button src={done} label='Lưu thông tin' wrapCss={`w-[160px] text-primary  font-bold bg-[#ece3d5] opacity-50`} />
                    </div>
                </div>
            </div>
        </Modal >
    )
}

export default ModalCreateFile
