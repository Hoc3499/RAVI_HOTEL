import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React from 'react'
import TypeCheckbox from '../input/TypeCheckbox';
import less from "../../assets/icons/expand_less_FILL0_wght400_GRAD0_opsz48.svg"
import more from "../../assets/icons/expand_more_FILL0_wght400_GRAD0_opsz48.svg"

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


const InfoPackageTable = () => {
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
            expandable={{
                rowExpandable: (record) => record.info === "Gói không thuộc nhóm",
                expandedRowRender: (record) => {
                    return (
                        <Table showHeader={false} columns={nestColumns} dataSource={nestData} pagination={false} />
                    )
                },
                expandIcon: ({ expanded, onExpand, record }) => {
                    if (record.info === "Gói không thuộc nhóm") {
                        return (
                            expanded ? <img src={less} className="" alt="" onClick={(e) => onExpand(record, e)} /> : <img src={more} className="" alt="" onClick={(e) => onExpand(record, e)} />
                        )
                    }
                }
            }}
        />
    )
}

export default InfoPackageTable
