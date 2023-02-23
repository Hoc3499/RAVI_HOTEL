import React from 'react'
import { Modal } from 'antd';
import TypeText from '../input/TypeText';
import search from "../../assets/icons/search_FILL0_wght400_GRAD0_opsz48.svg"
import arrowRight from "../../assets/icons/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.svg"
import done from "../../assets/icons/done_black_24dp.svg"
import note from "../../assets/icons/add_notes_FILL0_wght400_GRAD0_opsz48.svg"
import demography from "../../assets/icons/demography_FILL0_wght400_GRAD0_opsz48.svg"
import { COLORS } from '../../constants/colors';
import SelectComp from '../select/SelectComp';
import TypeCheckbox from '../input/TypeCheckbox';


export interface ModalProps {
    openModal?: boolean;
    setOpenModal?: any;
}

const ModalRoom = ({ openModal, setOpenModal }: ModalProps) => {
    return (
        <>
            <Modal
                title="Chọn phòng"
                centered
                open={true}
                // onOk={() => setOpenModal(false)}
                // onCancel={() => setOpenModal(false)}
                width={1340}
                bodyStyle={{ height: "60vh" }}
                footer={null}
            >
                <div className="">
                    <span>Từ ngày: <span>03/01/2023</span> - Đến ngày: <span>05/01/2023</span></span>
                    <div className="form grid grid-cols-4">
                        <TypeText label='Số phòng' />
                        <SelectComp label='Tòa nhà' />
                        <SelectComp label='Thuộc tính' />
                        <SelectComp label='Loại' />
                        <SelectComp label='Cánh' />
                        <SelectComp label='Hướng' />
                        <div className="grid grid-cols-7">
                            <TypeText label='Từ tầng' wrapCss='col-span-3' />
                            <div className="flex items-center mt-2 mr-4">
                                <img
                                    className=" "
                                    src={arrowRight}
                                    alt=""
                                />
                            </div>
                            <TypeText label='Đến tầng' wrapCss='col-span-3' />

                        </div>
                        <SelectComp label='Trạng thái' />
                    </div>
                    <div className="grid grid-cols-4 " >
                        <TypeCheckbox label='Hiện tất cả' />
                        <TypeCheckbox label='Chỉ hiện phòng có sẵn' />
                        <div className={`relative border rounded  bg-[${COLORS.primaryColor}] text-white w-[40%] h-9  text-center leading-9 col-start-4 `}>
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
                    <div className="footer flex float-right w-1/6 cursor-pointer" >
                        <div className={`h-9 font-bold leading-9 px-2 text-[${COLORS.primaryColor}] rounded hover:bg-[#f7f1e6]`} onClick={() => setOpenModal(false)}>HỦY</div>
                        <div className={`relative border rounded mx-2 text-[${COLORS.primaryColor}] w-[100%] h-9 text-center leading-9 bg-[#ece3d5] opacity-50`}>
                            <span className="ml-5 font-bold" >
                                Chọn phòng
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
        </>
    )
}

export default ModalRoom
