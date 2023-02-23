import React from 'react'
import { Modal } from 'antd';
import TypeText from '../input/TypeText';
import search from "../../assets/icons/search_FILL0_wght400_GRAD0_opsz48.svg"
import note from "../../assets/icons/add_notes_FILL0_wght400_GRAD0_opsz48.svg"
import demography from "../../assets/icons/demography_FILL0_wght400_GRAD0_opsz48.svg"
import { COLORS } from '../../constants/colors';


export interface ModalProps {
    openModal: boolean;
    setOpenModal: any;
}

const ModalCustomer = ({ openModal, setOpenModal }: ModalProps) => {
    return (
        <>
            <Modal
                title="Gắn hồ sơ khách vào đặt phòng"
                centered
                open={openModal}
                // onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
                width={1340}
                bodyStyle={{ height: "60vh" }}
                footer={null}
            >
                <div className="">
                    <div className="form grid grid-cols-4">
                        <TypeText label='Họ và tên khách hàng' />
                        <TypeText label="Số điện thoại" />
                        <TypeText label="Địa chỉ" />
                        <TypeText label="Địa chỉ email" />
                        <TypeText label="Hộ chiếu/Thẻ căn cước" />
                        <TypeText label="Quốc tịch" />
                        <div className={`relative border rounded  bg-[${COLORS.primaryColor}] text-white w-[40%] h-9 mt-[25px] text-center leading-9`}>
                            <span className="ml-5 font-bold" >
                                Tìm kiếm
                            </span>
                            <img
                                className="absolute top-[10px] left-3 w-[18px] h-[18px] "
                                src={search}
                                alt=""
                            />
                        </div>
                    </div>
                    <div>Table</div>
                    <div className="footer flex float-right w-1/3 cursor-pointer" >
                        <div className={`h-9 font-bold leading-9 px-2 text-[${COLORS.primaryColor}] rounded hover:bg-[#f7f1e6]`} onClick={() => setOpenModal(false)}>HỦY</div>
                        <div className={`relative border rounded mx-2 text-[${COLORS.primaryColor}] w-[40%] h-9 text-center leading-9`}>
                            <span className="ml-5 font-bold" >
                                Thêm hồ sơ
                            </span>
                            <img
                                className="absolute top-[10px] left-3 w-[18px] h-[18px] "
                                src={note}
                                alt=""
                            />
                        </div>
                        <div className={`relative border rounded bg-[#ece3d5] text-[${COLORS.primaryColor}] w-[40%] h-9 text-center leading-9 `}>
                            <span className="ml-5 font-bold" >
                                GÁN  HỒ SƠ
                            </span>
                            <img
                                className="absolute top-[10px] left-3 w-[18px] h-[18px] "
                                src={demography}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalCustomer
