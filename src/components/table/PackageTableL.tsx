import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import AddComp from './actions/AddComp';
import less from "../../assets/icons/expand_less_FILL0_wght400_GRAD0_opsz48.svg"
import more from "../../assets/icons/expand_more_FILL0_wght400_GRAD0_opsz48.svg"


interface DataType {
    add?: any;
    scode?: any;
    lcode?: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "   ",
        dataIndex: "add",
        key: "add",
        width: "7%",
    },
    {
        title: "Mã gói/ Mã nhóm gói",
        dataIndex: "scode",
        key: "scode",
        width: "44%",
    },
    {
        title: "Mã gói/ Mã nhóm gói",
        dataIndex: "lcode",
        key: "lcode",
        width: "44%",
    },

];

const nestColumns: ColumnsType<DataType> = [
    {
        title: "   ",
        dataIndex: "add",
        key: "add",
        width: "14%",
    },
    {
        title: "",
        dataIndex: "scode",
        key: "scode",
        width: "43%",
    },
    {
        title: "",
        dataIndex: "lcode",
        key: "lcode",
        width: "43%",
    },
]

const data: DataType[] = [
    {
        add: <AddComp />,
        scode: "Bus",
        lcode: "Bus đưa đón sân bay",
    },
    {
        add: <AddComp />,
        scode: "Bus",
        lcode: "Bus đưa đón sân bay",
    },
    {
        add: <AddComp />,
        scode: "FVC1",
        lcode: "FLC Voucher",
    },
];

const nestData: DataType[] = [
    {
        scode: "BFAR",
        lcode: "Ăn sáng người lớn"
    },
    {
        scode: "Bus",
        lcode: "Bus đưa đón sân bay"
    },
    {
        scode: "FBL",
        lcode: "Buffet lunch"
    },
    {
        scode: "RN",
        lcode: "Room night"
    },
    {
        scode: "VIN",
        lcode: "Vin Safari"
    },
]


const PackageTableL = () => {
    let locale = {
        emptyText: "Không có dữ liệu",
    };


    return (
        <Table
            rowClassName={(record, index) =>
                index % 2 === 0 ? "table-row-light" : "table-row-dark"
            }
            locale={locale}
            columns={columns}
            dataSource={data}
            pagination={false}
            style={{ minHeight: "500px" }}
            expandable={{
                rowExpandable: (record) => record.scode === "FVC1",
                expandedRowRender: (record) => {
                    return (
                        <Table showHeader={false} columns={nestColumns} dataSource={nestData} pagination={false} />
                    )
                },
                expandIcon: ({ expanded, onExpand, record }) => {
                    if (record.scode === "FVC1") {
                        return (
                            expanded ? <img src={less} className="w-6 h-6" alt="" onClick={(e) => onExpand(record, e)} /> : <img src={more} className="w-6 h-6" alt="" onClick={(e) => onExpand(record, e)} />
                        )
                    }
                }
            }}
        />
    )
}

export default PackageTableL
