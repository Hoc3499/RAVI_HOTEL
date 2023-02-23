import React, { useState } from 'react'
import { Table, Button } from "antd";


const columns = [
    {
        title: "Name",
        dataIndex: "name"
    },
    {
        title: "Age",
        dataIndex: "age"
    },
    {
        title: "Address",
        dataIndex: "address"
    }
];

const dataSource = [
    {
        key: 1,
        name: `Edward King 1`,
        age: 32,
        address: `London, Park Lane no. 1`
    },
    {
        key: 2,
        name: `Edward King 2`,
        age: 35,
        address: `London, Park Lane no. 2`
    }
];


const TableTest = () => {

    const [select, setSelect] = useState({
        selectedRowKeys: [],
        loading: false
    });

    console.log("selectedRowKeys", select);

    const { selectedRowKeys, loading } = select;

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys: any) => {
            setSelect({
                ...select,
                selectedRowKeys: selectedRowKeys
            });
        }
    };

    return (
        <Table
            columns={columns}
            rowSelection={rowSelection}
            dataSource={dataSource}
            loading={loading}
        />
    )
}

export default TableTest
