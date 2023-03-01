import { Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';
import done from "../../../assets/icons/done_white_24dp.svg";
import search from "../../../assets/icons/search_FILL0_wght400_GRAD0_opsz48_white.svg";
import Button from '../../button/Button';
import TypeCheckbox from '../../input/TypeCheckbox';
import TypeDate from '../../input/TypeDate';
import TypeText from '../../input/TypeText';
import SelectComp from '../../select/SelectComp';
import TableComp from '../../table/TableComp';

export interface ModalProps {
    openModal?: boolean;
    setOpenModal?: any;
}

interface DataType {
    codeG?: any;
    name?: any;
    status?: any;
    subCode?: any;
    bRank?: any;
    rRank?: any;
    from?: any;
    end?: any;
    nRooms?: any;
    custommers?: any;
    sRooms?: any;
    pCode?: any;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Mã đoàn",
        dataIndex: "codeG",
        key: "code",
        width: "6%",
    },
    {
        title: "Tên đoàn",
        dataIndex: "name",
        key: "name",
        width: "18%",
    },
    {
        title: "Trạng thái đoàn",
        dataIndex: "status",
        key: "status",
        width: "6%",
        render: () => {
            return (<TypeCheckbox />)
        }
    },
    {
        title: "Mã đoàn phụ",
        key: "subCode",
        width: "9.5%",
        dataIndex: "subCode",

    },
    {
        title: "Hạng đặt",
        key: "bRank",
        width: "9.5%",
        dataIndex: "bRank",
    },
    {
        title: "Hạng thực",
        key: "rRank",
        width: "7%",
        dataIndex: "rRank",
    },
    {
        title: "Ngày đến",
        key: "from",
        width: "10%",
        dataIndex: "from",
    },
    {
        title: "Ngày đi",
        key: "end",
        width: "10%",
        dataIndex: "end",
    },
    {
        title: "Số phòng đặt",
        key: "nRooms",
        width: "6%",
        dataIndex: "nRooms",
    },
    {
        title: "Số khách đặt",
        key: "custommers",
        width: "6%",
        dataIndex: "custommers",
    },
    {
        title: "Số phòng đã chọn",
        key: "sRooms",
        width: "6%",
        dataIndex: "sRooms",
    },
    {
        title: "Mã giá",
        key: "pCode",
        width: "6%",
        dataIndex: "pCode",
    },
];

const data: DataType[] = [
    {
        codeG: "s",
        name: "s",
        status: "s",
        subCode: "s",
        bRank: "s",
        rRank: "s",
        from: "s",
        end: "s",
        nRooms: "s",
        custommers: "s",
        sRooms: "s",
        pCode: "s",
    }
]

const ModalGroup = ({ openModal, setOpenModal }: ModalProps) => {
    return (
        <>
            <Modal
                title="Chọn đoàn"
                centered
                style={{ marginTop: -200 }}
                open={openModal}
                // onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
                width={"98vw"}
                footer={null}
            >
                <div className="">
                    <span>Từ ngày: <span>03/01/2023 </span> - Đến ngày: <span>05/01/2023</span></span>
                    <div className="form grid grid-cols-4">
                        <TypeText label='Thông tin chính' />
                        <SelectComp label='Công ty, đại lý du lịch' />
                        <TypeDate label='Ngày nhận phòng' />
                        <TypeDate label='Ngày trả phòng' />
                        <TypeDate label='Ngày đến' />
                        <TypeDate label='Ngày đi' />
                        <SelectComp label='Trạng thái đặt phòng' />
                        <SelectComp label='Trạng thái đoàn' />

                    </div>
                    <div className="flex justify-between mx-4">
                        <div> </div>
                        <Button wrapCss={`btn-primary text-white font-bold w-[126px]  col-start-4`} label='Tìm kiếm' src={search} labelCss="ml-4" />
                    </div>
                    <div className='pb-12 pt-8'>
                        <TableComp columns={columns} pagination={false} data={data} />
                    </div>

                    <div className=" flex ml-auto float-right my-6 -mt-8">
                        <Button handleClick={() => setOpenModal(false)} label='Đóng' wrapCss={`w-[60px] text-[14px] text-primary font-bold hover:bg-[#f7f1e6]`} />
                        <Button src={done} label='Chọn đoàn' labelCss="ml-8" wrapCss={`w-[130px] text-[14px] ml-2 text-white font-bold btn-primary`} />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalGroup
