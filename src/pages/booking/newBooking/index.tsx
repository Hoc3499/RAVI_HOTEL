import React from "react";
import { Tabs } from "antd";
import TypeCheckbox from "../../../components/input/TypeCheckbox";
import CustomerInfo from "./customerInfo/CustomerInfo";
import BookingInfo from "./bookingInfo/BookingInfo";
import OtherInfo from "./otherInfo/OtherInfo";

const NewBooking = () => {
    return (
        <div>
            <div className=" flex justify-between items-end">
                <div className=" uppercase font-bold text-[24px]">
                    Tạo đặt phòng mới
                </div>
                <div className=" flex items-end">
                    <div className=" flex relative">
                        {/* <TypeCheckbox css="absolute left-[-20px] top-[4px]" /> */}
                        <div className="text flex flex-col text-[14px]">
                            <TypeCheckbox label="Xác nhận: 20899" />
                            <TypeCheckbox label="Đặt phòng: 31245" css="invisible" />
                            {/* <span>Xác nhận: 20899</span> css="invisible " 
                            <span>Đặt phòng: 31245</span> */}
                        </div>
                    </div>
                    <div className=" text-[#252525] font-bold text-[20px] ml-[58px] ">
                        New booking
                    </div>
                </div>
            </div>
            <div className="body">
                <Tabs
                    onChange={(key: string) => console.log(key)}
                    defaultActiveKey="1"
                    items={[
                        {
                            label: `Thông tin khách (0)`,
                            key: "profile",
                            children: <CustomerInfo />,
                        },
                        {
                            label: `Thông tin đặt phòng`,
                            key: "room",
                            children: <BookingInfo />,
                        },
                        {
                            label: `Thông tin khác`,
                            key: "other",
                            children: <OtherInfo />,
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default NewBooking;
