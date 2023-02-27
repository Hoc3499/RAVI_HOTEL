import { Table } from 'antd';
import React from 'react'

interface Props {
    columns?: any;
    data?: any;
    pagination?: any;
    expanded?: any;
    footer?: any;
    scroll?: any;
}

const TableComp = ({ columns, data, pagination, footer, scroll = 422, expanded }: Props) => {
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
            pagination={pagination}
            footer={() => footer}
            scroll={{ y: scroll }}
            onRow={(record) => ({
                onClick: () => console.log(record),
            })}
        />
    )
}

export default TableComp
