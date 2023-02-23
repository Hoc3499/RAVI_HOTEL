import { Row, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";

interface DataType {
    code?: string;
    firstName?: string;
    lastName?: string;
    callBY?: string;
    gender?: string;
    bthday?: string;
    country?: string;
    passport?: string;
    id?: string;
    email?: string;
    phone?: string;
    address?: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Mã hồ sơ",
        dataIndex: "code",
        key: "code",
        width: "6%",
    },
    {
        title: "Họ",
        dataIndex: "firstName",
        key: "firstName",
        width: "9%",
    },
    {
        title: "Tên",
        dataIndex: "lastName",
        key: "lastName",
        width: "9%",
    },
    {
        title: "Danh xưng",
        key: "callBY",
        width: "5%",
        dataIndex: "callBY",
    },
    {
        title: "Giới tính",
        key: "gender",
        width: "5%",
        dataIndex: "gender",
    },
    {
        title: "Sinh nhật",
        key: "bthday",
        width: "8%",
        dataIndex: "bthday",
    },
    {
        title: "Quốc tịch",
        key: "country",
        width: "7.5%",
        dataIndex: "country",
    },
    {
        title: "Hộ chiếu",
        key: "passport",
        width: "7%",
        dataIndex: "passport",
    },
    {
        title: "Thẻ căn cước",
        key: "id",
        width: "8.5%",
        dataIndex: "id",
    },
    {
        title: "Địa chỉ email",
        key: "email",
        width: "9%",
        dataIndex: "email",
    },
    {
        title: "Số điện thoại",
        key: "phone",
        width: "8%",
        dataIndex: "phone",
    },
    {
        title: "Địa chỉ",
        key: "address",
        width: "18%",
        dataIndex: "address",
    },
];

const data: DataType[] = [
    {
        code: "28130",
        firstName: "Nguyễn",
        lastName: "Công",
        callBY: "Ông",
        gender: "Nam",
        bthday: "26/12/1992",
        country: "Vietnam",
        passport: "",
        id: "00124151566",
        email: "info@gmail.com",
        phone: "303.555.0105",
        address: "3605 Parker Rd.",
    },
    {
        code: "28130",
        firstName: "Nguyễn",
        lastName: "Công",
        callBY: "Ông",
        gender: "Nam",
        bthday: "26/12/1992",
        country: "Vietnam",
        passport: "",
        id: "00124151566",
        email: "info@gmail.com",
        phone: "303.555.0105",
        address: "3605 Parker Rd.",
    },
    {
        code: "28130",
        firstName: "Nguyễn",
        lastName: "Công",
        callBY: "Ông",
        gender: "Nam",
        bthday: "26/12/1992",
        country: "Vietnam",
        passport: "",
        id: "00124151566",
        email: "info@gmail.com",
        phone: "303.555.0105",
        address: "3605 Parker Rd.",
    },
    {
        code: "28130",
        firstName: "Nguyễn",
        lastName: "Công",
        callBY: "Ông",
        gender: "Nam",
        bthday: "26/12/1992",
        country: "Vietnam",
        passport: "",
        id: "00124151566",
        email: "info@gmail.com",
        phone: "303.555.0105",
        address: "3605 Parker Rd.",
    },
    {
        code: "28130",
        firstName: "Nguyễn",
        lastName: "Công",
        callBY: "Ông",
        gender: "Nam",
        bthday: "26/12/1992",
        country: "Vietnam",
        passport: "",
        id: "00124151566",
        email: "info@gmail.com",
        phone: "303.555.0105",
        address: "3605 Parker Rd.",
    },
    {
        code: "28130",
        firstName: "Nguyễn",
        lastName: "Công",
        callBY: "Ông",
        gender: "Nam",
        bthday: "26/12/1992",
        country: "Vietnam",
        passport: "",
        id: "00124151566",
        email: "info@gmail.com",
        phone: "303.555.0105",
        address: "3605 Parker Rd.",
    },
    {
        code: "28130",
        firstName: "Nguyễn",
        lastName: "Công",
        callBY: "Ông",
        gender: "Nam",
        bthday: "26/12/1992",
        country: "Vietnam",
        passport: "",
        id: "00124151566",
        email: "info@gmail.com",
        phone: "303.555.0105",
        address: "3605 Parker Rd.",
    },
    {
        code: "28130",
        firstName: "Nguyễn",
        lastName: "Công",
        callBY: "Ông",
        gender: "Nam",
        bthday: "26/12/1992",
        country: "Vietnam",
        passport: "",
        id: "00124151566",
        email: "info@gmail.com",
        phone: "303.555.0105",
        address: "3605 Parker Rd.",
    },
    {
        code: "28130",
        firstName: "Nguyễn",
        lastName: "Công",
        callBY: "Ông",
        gender: "Nam",
        bthday: "26/12/1992",
        country: "Vietnam",
        passport: "",
        id: "00124151566",
        email: "info@gmail.com",
        phone: "303.555.0105",
        address: "3605 Parker Rd.",
    },
    {
        code: "28130",
        firstName: "Nguyễn",
        lastName: "Công",
        callBY: "Ông",
        gender: "Nam",
        bthday: "26/12/1992",
        country: "Vietnam",
        passport: "",
        id: "00124151566",
        email: "info@gmail.com",
        phone: "303.555.0105",
        address: "3605 Parker Rd.",
    },
    {
        code: "28130",
        firstName: "Nguyễn",
        lastName: "Công",
        callBY: "Ông",
        gender: "Nam",
        bthday: "26/12/1992",
        country: "Vietnam",
        passport: "",
        id: "00124151566",
        email: "info@gmail.com",
        phone: "303.555.0105",
        address: "3605 Parker Rd.",
    },
    {
        code: "28130",
        firstName: "Nguyễn",
        lastName: "Công",
        callBY: "Ông",
        gender: "Nam",
        bthday: "26/12/1992",
        country: "Vietnam",
        passport: "",
        id: "00124151566",
        email: "info@gmail.com",
        phone: "303.555.0105",
        address: "3605 Parker Rd.",
    },
    {
        code: "28130",
        firstName: "Nguyễn",
        lastName: "Công",
        callBY: "Ông",
        gender: "Nam",
        bthday: "26/12/1992",
        country: "Vietnam",
        passport: "",
        id: "00124151566",
        email: "info@gmail.com",
        phone: "303.555.0105",
        address: "3605 Parker Rd.",
    },
];

const CustomerProfile: React.FC = () => {
    let locale = {
        emptyText: "Không có dữ liệu",
    };

    const TableFooter = () => {
        return (
            <Row className="float-right p-0">
                Số bản ghi: 8715
            </Row>
        )
    }

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
            footer={() =>
                <TableFooter />}
        />
    );
};

export default CustomerProfile;
