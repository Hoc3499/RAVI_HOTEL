import { Modal } from "antd";
import { ColumnsType } from "antd/es/table";
import done from "../../../assets/icons/done_white_24dp.svg";
import Button from "../../button/Button";
import TypeCheckbox from "../../input/TypeCheckbox";
import InfoPackageTable from "../../table/InfoPackageTable";
import TableComp from "../../table/TableComp";


export interface ModalProps {
    openModal?: any;
    setOpenModal?: any;
}

interface DataType {
    info?: any;
    name?: any;
    add?: any;
    gntmg?: any;
    kd?: any;
    gross?: any;
    fee?: any;
    tax?: any;
    net?: any;
    key?: any;

}

const columns: ColumnsType<DataType> = [
    {
        title: "Thông tin chính",
        dataIndex: "info",
        key: "info",
        width: "13%",
    },
    {
        title: "Tên gói/ Tên nhóm gói",
        dataIndex: "name",
        key: "name",
        width: "16%",
    },
    {
        title: "Gói bổ sung",
        dataIndex: "add",
        key: "add",
        width: "8%",
    },
    {
        title: "Giá nằm trong mã giá",
        dataIndex: "gntmg",
        key: "gntmg",
        width: "9%",
    },
    {
        title: "Khả dụng",
        dataIndex: "kd",
        key: "kd",
        width: "8%",
    },
    {
        title: "Tổng tiền trước thuế, phí",
        dataIndex: "gross",
        key: "gross",
        width: "14%",
    },
    {
        title: "Tiền phí",
        dataIndex: "fee",
        key: "fee",
        width: "9%",
    },
    {
        title: "Tiền thuế",
        dataIndex: "tax",
        key: "tax",
        width: "9%",
    },
    {
        title: "Tổng tiền sau thuế, phí",
        dataIndex: "net",
        key: "net",
        width: "17%",
    },
];

const nestColumns: ColumnsType<DataType> = [
    {
        title: "Thông tin chính",
        dataIndex: "info",
        key: "info",
        width: "13%",
    },
    {
        title: "Tên gói/ Tên nhóm gói",
        dataIndex: "name",
        key: "name",
        width: "16%",
    },
    {
        title: "Gói bổ sung",
        dataIndex: "add",
        key: "add",
        width: "8%",
        render: () => {
            return (<TypeCheckbox />)
        }
    },
    {
        title: "Giá nằm trong mã giá",
        dataIndex: "gntmg",
        key: "gntmg",
        width: "9%",
        render: () => {
            return (<TypeCheckbox />)
        }
    },
    {
        title: "Khả dụng",
        dataIndex: "kd",
        key: "kd",
        width: "8%",
        render: () => {
            return (<TypeCheckbox />)
        }
    },
    {
        title: "Tổng tiền trước thuế, phí",
        dataIndex: "gross",
        key: "gross",
        width: "14%",
    },
    {
        title: "Tiền phí",
        dataIndex: "fee",
        key: "fee",
        width: "9%",
    },
    {
        title: "Tiền thuế",
        dataIndex: "tax",
        key: "tax",
        width: "9%",
    },
    {
        title: "Tổng tiền sau thuế, phí",
        dataIndex: "net",
        key: "net",
        width: "17%",
    },
];

const data: DataType[] = [
    {
        key: "1",
        info: "Gói không thuộc nhóm",
        name: "",
        add: "",
        gntmg: "",
        kd: "",
        gross: "706.061đ",
        fee: "30.303đ",
        tax: "63.636đ",
        net: "800.000đ",
    },
    {
        key: "2",
        info: "Gói không thuộc nhóm",
        name: "",
        add: "",
        gntmg: "",
        kd: "",
        gross: "1.181.000đ",
        fee: "90.000đ",
        tax: "156.000đ",
        net: "2.130.000đ",
    },
];

const nestData: DataType[] = [
    {
        key: "1",
        info: "Bus",
        name: "Bus đưa đón sân bay",
        gross: "100.000đ",
        fee: "0đ",
        tax: "0đ",
        net: "100.000đ",
    },
]


const ModalInfoPackage = ({ openModal, setOpenModal }: ModalProps) => {
    return (
        <>
            <Modal
                title="Thông tin gói"
                style={{ top: -160 }}
                centered
                open={openModal}
                // onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
                width={"98vw"}
                footer={null}
            >
                <div className="pb-20">
                    <span className="font-bold text-base">Thông tin đặt phòng</span>
                    <div className="mt-4 mb-6">
                        <span>Ngày đến: 03/01/2023</span>
                        <span className="mx-10">Ngày đi: 06/01/2023</span>
                        <span>Số đêm: 03</span>
                    </div>
                    <span className="text-base font-bold mb-3">Danh sách gói/ Nhóm gói có thể mua thêm</span>
                    <InfoPackageTable />
                    {/* <TableComp columns={} data={} pagination={false}/> */}
                    <div
                        className={` flex float-right mt-12 font-bold text-primary`}
                    >
                        <Button label='Đóng' handleClick={() => { setOpenModal(false) }} wrapCss={`w-[60px] text-primary  hover:bg-[#f7f1e6]`} />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ModalInfoPackage;
