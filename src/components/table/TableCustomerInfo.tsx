import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React from 'react'


interface DataType {
    status?: string;
    customer?: any;
    name?: string;
    checkin?: string;
    checkout?: string;
    phone?: string;
    email?: string;
    address?: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: " Trạng thái khách",
        dataIndex: "status",
        key: "status",
        width: "6%",
    },
    {
        title: "Khách chính",
        dataIndex: "customer",
        key: "customer",
        width: "9%",
    },
    {
        title: "Họ và tên",
        dataIndex: "name",
        key: "name",
        width: "9%",
    },
    {
        title: "Ngày đến",
        key: "checkin",
        width: "6.5%",
        dataIndex: "checkin",
    },
    {
        title: "Ngày đi",
        key: "checkout",
        width: "6%",
        dataIndex: "checkout",
    },
    {
        title: "SĐT",
        key: "phone",
        width: "8%",
        dataIndex: "phone",
    },
    {
        title: "Địa chỉ email",
        key: "email",
        width: "9%",
        dataIndex: "email",
    },
    {
        title: "Địa chỉ nơi ở ",
        key: "address",
        width: "15.5%",
        dataIndex: "address",
    },
];

const data: DataType[] = [
    {
        email: "info@gmail.com",
        phone: "303.555.0105",
        address: "3605 Parker Rd.",
    }
];


const TableCustomerInfo = () => {
    let locale = {
        emptyText: "Không có dữ liệu",
    };
    return (
        <Table
            pagination={{
                defaultPageSize: 10,
                showSizeChanger: true,
                pageSizeOptions: ["10", "20", "30", "40", "50"],
            }}
            rowClassName={(record, index) =>
                index % 2 === 0 ? "table-row-light" : "table-row-dark"
            }
            locale={locale}
            columns={columns}
            dataSource={data}
            scroll={{ y: 422 }}

        />
    )
}

export default TableCustomerInfo
