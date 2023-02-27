import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import RemoveComp from './actions/RemoveComp';


interface DataType {
    add?: any;
    scode?: any;
    lcode?: string;
    qty?: any;
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
        width: "38%",
    },
    {
        title: "Mã gói/ Mã nhóm gói",
        dataIndex: "lcode",
        key: "lcode",
        width: "38%",
    }, {
        title: "Số lượng",
        dataIndex: "qty",
        key: "qty",
        width: "12%",
    },

];

const data: DataType[] = [
    {
        add: <RemoveComp />,
        scode: "Bus",
        lcode: "Bus đưa đón sân bay",
        qty: "10    "
    },
    {
        add: <RemoveComp />,
        scode: "Bus",
        lcode: "Bus đưa đón sân bay",
        qty: "10    "
    },
    {
        add: <RemoveComp />,
        scode: "Bus",
        lcode: "Bus đưa đón sân bay",
        qty: "10    "
    },
];


const PackageTableR = () => {
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
        />
    )
}

export default PackageTableR
