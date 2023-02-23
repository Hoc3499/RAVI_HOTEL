import React from 'react'
import DiscountInput from '../../../../components/discount'
import HeaderCustomerInfo from '../../../../components/headerCI'
import Profile from '../../../../components/input/inputSearch'
import TypeCheckbox from '../../../../components/input/TypeCheckbox'
import TypeDate from '../../../../components/input/TypeDate'
import TypeNumber from '../../../../components/input/TypeNumber'
import TypeRadio from '../../../../components/input/TypeRadio'
import TypeText from '../../../../components/input/TypeText'
import ModalRoom from '../../../../components/modal/ModalRoom'
import SelectComp from '../../../../components/select/SelectComp'
import { COLORS } from '../../../../constants/colors'
import add from "../../../../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg"
import info from "../../../../assets/icons/info_primary_24dp.svg";
import TextAreaComp from '../../../../components/input/TextAreaComp'


const BookingInfo = () => {
    return (
        <div className='border '>
            <HeaderCustomerInfo label='Chỉnh sửa thông tin' />
            <div className="grid grid-cols-3 gap-y-5 ml-4 ">
                <Profile label="Hồ sơ" require />
                <TypeRadio require />
                <TypeText label="Họ và tên khách" require wrapCss='col-start-1 col-end-2' />
                <TypeText label="Số điện thoại" require />
                <TypeText label="Email" require />
            </div>
            <div className="border mx-4 border-y border-x-transparent mt-4 pt-3 pb-4">
                <span className=" font-bold text-xl ">Thông tin đặt phòng</span>
                <div className='grid grid-cols-3 gap-y-5  mt-3'>
                    <TypeDate label='Thời gian nhận phòng' require />
                    <SelectComp label="Hạng đặt" require />
                    <Profile label="Đoàn/Đoàn phụ" />
                </div>
                <div className='grid grid-cols-6 gap-y-5 '>
                    <TypeDate label='Thời gian trả phòng' require wrapCss='col-span-2' />
                    <SelectComp label="Hạng thực" require wrapCss='col-span-2' />
                    <TypeCheckbox label='Khách Walk-in' />
                    <TypeCheckbox label='Ở dài hạn' />
                </div>
                <div className="grid grid-cols-12 ">
                    <TypeCheckbox label='Đặt nhiều' wrapCss='col-span-2' />
                    <Profile label='Phòng' require wrapCss='col-span-2' />
                    {false && <ModalRoom />}
                    <TypeText label='Số đêm' wrapCss='col-span-2' />
                    <TypeNumber label='NL/TE' />
                    <TypeNumber wrapCss='mt-[22px]' />
                    <TypeCheckbox label='Khóa chuyển phòng' wrapCss='col-span-2' />
                    <TypeCheckbox label='Không thêm dich vụ' wrapCss='col-span-2' />
                </div>
                <div className="grid grid-cols-6">
                    <TypeCheckbox label='Bữa sáng' />
                    <SelectComp require label='Loại bữa sáng' />
                    <SelectComp require label='Trạng thái' wrapCss='col-span-2' />
                    <TypeDate label='Ngày nhắc' wrapCss='col-span-2' />
                </div>
            </div>
            <div className="border border-t-transparent border-b border-x-transparent mx-4 py-3">
                <span className=" font-bold text-xl ">Thống kê</span>
                <div className="grid grid-cols-3">
                    <SelectComp label='Công ty, đại lý du lịch' require />
                    <SelectComp label='Tài khoản công nợ' />
                    <SelectComp label='Phân khúc TT' />
                    <SelectComp label='NV kinh doanh' require />
                    <SelectComp label='Nguồn' />
                </div>
            </div>
            <div className="border grid grid-cols-3 mx-4 border-t-transparent  border-x-transparent mt-1 pt-3">
                <div className="">
                    <span className=" font-bold text-xl ">Giá phòng</span>
                    <div className="grid grid-cols-10 mt-10 mb-6 ">
                        <TypeCheckbox label='Nội bộ' wrapCss='col-span-3' />
                        <TypeCheckbox label='Miễn phí' wrapCss='col-span-3' />
                        <TypeCheckbox label='Không in giá' wrapCss='col-span-4' />
                    </div>
                    <div className="grid grid-cols-2 ">
                        <TypeCheckbox label='NETT' />
                        <SelectComp label='Mã giá' require wrapCss='opacity-50' />
                        <TypeCheckbox label='Tự nhập giá' require />
                        <SelectComp label='Giá tiền' require />
                    </div>
                    <div className="grid grid-cols-4">
                        <TypeCheckbox label='Cập nhật khi C/I' wrapCss='col-span-2' require />
                        <SelectComp label='Tỷ giá' require />
                        <TypeText wrapCss='mt-[22px]' />
                    </div>
                </div>
                <div className="">
                    <span className=" font-bold text-xl ">Giảm giá</span>
                    <div className=" grid grid-cols-1 mt-1">
                        <div className="grid grid-cols-4">
                            <DiscountInput label='Giảm giá' img='percent' />
                            <DiscountInput wrapCss='col-span-3 mt-[22px] ' img='money' />
                        </div>
                        <TypeText label='Đêm tính tiền' wrapCss='mt-[21px]' />
                        <TypeText label='Lí do giảm giá' wrapCss='mt-1' />
                    </div>
                </div>
                <div className="">
                    <span className=" font-bold text-xl ">Gói</span>
                    <div className="grid grid-cols-1 ml-8 gap-y-14 mt-9">
                        <div className="relative ">
                            <img src={add} alt="" className="w-[20px] h-[20px] absolute top-[2px] -left-8" />
                            <span className={`text-[14px] text-[${COLORS.primaryColor}]`}>Thêm/Sửa</span>
                        </div>
                        <div className="">Gói bổ sung</div>
                        <div className="mt-1">Gói trong mã giá</div>
                        <div className="relative ">
                            <img src={info} alt="" className="w-[20px] h-[20px] absolute top-[2px] -left-8" />
                            <span className={`text-[14px] text-[${COLORS.primaryColor}]`}>Hiển thị thông tin gói</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 mx-4  pt-3 pb-4">
                <span className=" font-bold text-xl ">Thông tin thanh toán</span>
                <div className="grid grid-cols-3 mt-[10px]">
                    <SelectComp label='Phương thức thanh toán' require />
                    <div className="grid grid-cols-4">
                        <TypeText label='Thẻ tín dụng' wrapCss='col-span-3' require />
                        <TypeText wrapCss='mt-[22px]' />
                    </div>
                    <TypeText label='Tên chủ thẻ' />
                </div>
                <TextAreaComp label='Ghi chú' require rows={4} />
            </div>
        </div>
    )
}

export default BookingInfo
