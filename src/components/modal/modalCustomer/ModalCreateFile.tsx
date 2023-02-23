import React from 'react'
import { Modal } from 'antd';
import TypeText from '../../input/TypeText';
import { COLORS } from '../../../constants/colors';
import done from "../../../assets/icons/done_black_24dp.svg";
import SelectComp from '../../select/SelectComp';
import TypeDate from '../../input/TypeDate';
import TypeRadio from '../../input/TypeRadio';
import TextAreaComp from '../../input/TextAreaComp';

interface ModalProps {
    open?: boolean;
    setOpen?: any;
}

const ModalCreateFile = ({ open, setOpen }: ModalProps) => {
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
                            <TypeRadio />
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
                <div className="footer mt-14 -mr-2 flex float-right w-1/6 cursor-pointer" >
                    <div className={`h-9 font-bold leading-9 px-2 text-[${COLORS.primaryColor}] rounded hover:bg-[#f7f1e6]`} onClick={() => setOpen(false)}>HỦY</div>
                    <div className={`relative border rounded mx-2 text-[${COLORS.primaryColor}] w-[100%] h-9 text-center leading-9 bg-[#ece3d5] opacity-50`} onClick={() => setOpen(false)}>
                        <span className="ml-5 font-bold" >
                            Lưu thông tin
                        </span>
                        <img
                            className="absolute top-[10px] left-3 w-[18px] h-[18px] "
                            src={done}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalCreateFile
