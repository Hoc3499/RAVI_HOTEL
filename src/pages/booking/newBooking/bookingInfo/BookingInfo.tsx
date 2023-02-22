import React from 'react'
import DiscountInput from '../../../../components/discount'
import HeaderCustomerInfo from '../../../../components/headerCI'
import Profile from '../../../../components/input/profile'
import TypeCheckbox from '../../../../components/input/TypeCheckbox'
import TypeDate from '../../../../components/input/TypeDate'
import TypeNumber from '../../../../components/input/TypeNumber'
import TypeRadio from '../../../../components/input/TypeRadio'
import TypeText from '../../../../components/input/TypeText'
import SelectComp from '../../../../components/select/SelectComp'

const BookingInfo = () => {
    return (
        <div className='border '>
            <HeaderCustomerInfo />
            <div className="grid grid-cols-3 gap-y-5 ml-4 ">
                <Profile label="Hồ sơ" require />
                <TypeRadio require />
                <TypeText label="Họ và tên khách" require wrapCss='col-start-1 col-end-2' />
                <TypeText label="Số điện thoại" require />
                <TypeText label="Email" require />
            </div>
            <div className="border mx-4 border-t-red-500 border-b-red-500 border-x-transparent mt-4 pt-3">
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
            <div className="border border-t-transparent border-b-red-500 border-x-transparent mx-4 mt-4 py-3">
                <span className=" font-bold text-xl ">Thống kê</span>
                <div className="grid grid-cols-3">
                    <SelectComp label='Công ty, đại lý du lịch' require />
                    <SelectComp label='Tài khoản công nợ' />
                    <SelectComp label='Phân khúc TT' />
                    <SelectComp label='NV kinh doanh' require />
                    <SelectComp label='Nguồn' />
                </div>
            </div>
            <div className="border grid grid-cols-3 mx-4 border-t-transparent border-b-red-500 border-x-transparent mt-1 pt-3">
                <div className="">
                    <span className=" font-bold text-xl ">Giá phòng</span>
                    <div className="grid grid-cols-3 mt-10 mb-6 ">
                        <TypeCheckbox label='Nội bộ' />
                        <TypeCheckbox label='Miễn phí' />
                        <TypeCheckbox label='Không in giá' />
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
                    <div className="mt-[10px] grid grid-cols-1 gap-y-4">
                        <div className="grid grid-cols-4">
                            <DiscountInput label='Giảm giá' img='percent' />
                            <DiscountInput wrapCss='col-span-3 mt-[22px] ' img='money' />
                        </div>
                        <TypeText label='Đêm tính tiền' wrapCss='' />
                        <TypeText label='Lí do giảm giá' wrapCss='' />
                    </div>
                </div>
                <div className="">
                    <span className=" font-bold text-xl ">Gói</span>
                </div>


            </div>
        </div>
    )
}

export default BookingInfo
