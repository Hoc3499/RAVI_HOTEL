import React from 'react'

const HeaderTableBookingInfo = () => {
    return (
        <div className="">
            <div className="font-bold text-base mb-3">
                <span>Thông tin đặt phòng 23566</span>
            </div>
            <div className="grid grid-cols-4 mb-8">
                <div className="">
                    <span className='font-light'>Tên khách chính: </span>
                    <span className="">Nguyễn Thành Nam</span>
                </div>

                <div className="">
                    <span className='font-light'>Ngày đến:  </span>
                    <span>15/02/2023</span>
                </div>
                <div className="">
                    <span className='font-light'>Phòng:  </span>
                    <span>201</span>
                </div>
                <div className="">
                    <span className='font-light'>Công ty, đại lý du lịch:  </span>
                    <span>TRAVELOKA</span>
                </div>

                <div className="">
                    <span className='font-light'>SĐT: </span>
                    <span>012314567</span>
                </div>
                <div className="">
                    <span className='font-light'>Ngày đi:  </span>
                    <span>16/02/2023</span>
                </div>

                <div className="">
                    <span className='font-light'>Đoàn:  </span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default HeaderTableBookingInfo
