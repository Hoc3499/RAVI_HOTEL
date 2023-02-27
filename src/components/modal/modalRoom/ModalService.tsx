import { Modal } from "antd";
import { ColumnsType } from "antd/es/table";
import add from "../../../assets/icons/add_FILL0_wght400_GRAD0_opsz48_black.svg";
import remove from "../../../assets/icons/delete_black_24dp.svg";
import done from "../../../assets/icons/done_white_24dp.svg";
import Button from "../../button/Button";
import TextAreaComp from "../../input/TextAreaComp";
import TypeCheckbox from "../../input/TypeCheckbox";
import TypeDate from "../../input/TypeDate";
import TypeNumber from "../../input/TypeNumber";
import TypeText from "../../input/TypeText";
import TableComp from "../../table/TableComp";

export interface ModalProps {
    openModal?: any;
    setOpenModal?: any;
}

interface DataType1 {
    code?: string;
    service?: string;
    price?: string;
    open?: any;
    all?: any;

}
const columns1: ColumnsType<DataType1> = [
    {
        title: "Mã",
        dataIndex: "code",
        key: "code",
        width: "13%",
    },
    {
        title: "Dịch vụ đặc biệt",
        dataIndex: "service",
        key: "service",
        width: "30%",
    },
    {
        title: "Giá đơn vị",
        dataIndex: "price",
        key: "price",
        width: "30%",

    },
    {
        title: "Mở",
        dataIndex: "open",
        key: "open",
        width: "10%",
        render: () => {
            return (<TypeCheckbox />)
        }
    },
    {
        title: "Bao gồm trong tiền phòng",
        dataIndex: "all",
        key: "all",
        width: "17%",
        render: () => {
            return (<TypeCheckbox />)
        }
    }
]
const data1: DataType1[] = [
    {
        code: "a",
        service: "b",
        price: "c",
    },
    {
        code: "a",
        service: "b",
        price: "c",
    },
    {
        code: "a",
        service: "b",
        price: "c",
    },
    {
        code: "a",
        service: "b",
        price: "c",
    },
    {
        code: "a",
        service: "b",
        price: "c",
    },
    {
        code: "a",
        service: "b",
        price: "c",
    },
    {
        code: "a",
        service: "b",
        price: "c",
    },
    {
        code: "a",
        service: "b",
        price: "c",
    },
];

interface DataType2 {
    code?: string;
    service?: string;
    qty?: string;
    price?: string;
    from?: string;
    end?: string;
    open?: string;
    staff?: any;
    note?: any;

}
const columns2: ColumnsType<DataType2> = [
    {
        title: "Mã",
        dataIndex: "code",
        key: "code",
        width: "8%",
    },
    {
        title: "Dịch vụ đặc biệt",
        dataIndex: "service",
        key: "service",
        width: "13%",
    },
    {
        title: "Số lượng",
        dataIndex: "qty",
        key: "qty",
        width: "5%",
    },
    {
        title: "Giá đơn vị",
        dataIndex: "price",
        key: "price",
        width: "13%",

    },
    {
        title: "Từ ngày",
        dataIndex: "from",
        key: "from",
        width: "13%",

    },
    {
        title: "Đến ngày",
        dataIndex: "end",
        key: "end",
        width: "13%",

    },
    {
        title: "Mở",
        dataIndex: "open",
        key: "open",
        width: "4%",
        render: () => {
            return (<TypeCheckbox />)
        }
    },
    {
        title: "Nhân viên",
        dataIndex: "staff",
        key: "staff",
        width: "13%",

    },
    {
        title: "Ghi chú",
        dataIndex: "note",
        key: "note",
        width: "18%",

    },
]

const data2: DataType2[] = [
    {
        code: "APU",
        service: "Airport Pick-up",
        qty: "1",
        price: "300.000đ",
        from: "14/02/2023",
        end: "14/02/2023",
        staff: "Roy123",
        note: "",
    },
    {
        code: "APU",
        service: "Airport Pick-up",
        qty: "1",
        price: "300.000đ",
        from: "14/02/2023",
        end: "14/02/2023",
        staff: "Roy123",
        note: "",
    }
];

const ModalService = ({ openModal, setOpenModal }: ModalProps) => {
    return (
        <>
            <Modal
                title="Dịch vụ đặc biệt"
                style={{ top: 80 }}
                centered
                open={openModal}
                // onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
                width={"98vw"}
                footer={null}
            >
                <div className="pb-20">
                    <div className="">
                        <div className="flex">
                            <div className="mr-10">
                                <span className="font-light">Ngày đến: </span>
                                <span>15/02/2023</span>
                            </div>
                            <div className="">
                                <span className="font-light">Ngày đi: </span>
                                <span>16/02/2023</span>
                            </div>
                        </div>
                        <div className="my-4">
                            ( 1 đêm, 2 ngày - Ngày đến = 1, ngày đi = 2 )
                        </div>
                    </div>
                    <div className="grid grid-cols-8 gap-x-4">
                        <div className="col-span-5 ">
                            <TableComp columns={columns1} data={data1} pagination={false} scroll={300} />
                        </div>
                        <div className=" col-span-3 border">
                            <div className="flex justify-between ">
                                <div className=""> </div>
                                <div className="flex h-[70px] ">
                                    <img
                                        src={add}
                                        alt=""
                                        className="w-[20px] h-[20px] mr-4 mt-[30px]"
                                    />
                                    <img
                                        src={remove}
                                        alt=""
                                        className="w-[20px] h-[20px] mr-4 mt-[30px]"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2  border-t py-4 pl-4">
                                <TypeDate label="Từ ngày" />
                                <TypeDate label="Đến ngày" />
                                <TypeNumber label="Số lượng" />
                                <TypeText label="Giá đơn vị" />
                                <TextAreaComp
                                    label="Ghi chú"
                                    rows={4}
                                    wrapCss="col-span-2 mr-4"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div
                            className="font-bold text-base
                        mb-2"
                        >
                            Danh sách giao dịch
                        </div>
                        <TableComp columns={columns2} data={data2} pagination={false} scroll={300} />

                    </div>
                    <div className={` flex float-right mt-12 font-bold  text-primary`}>
                        <Button
                            label="Đóng"
                            handleClick={() => {
                                setOpenModal(false);
                            }}
                            wrapCss={`w-[60px]  text-primary  hover:bg-[#f7f1e6]`}
                        />
                        <Button
                            src={done}
                            label="Lưu thông tin"
                            wrapCss={`w-[160px]    text-primary text-white btn-primary ml-2 `}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ModalService;
