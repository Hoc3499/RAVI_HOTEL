import { Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';
import arrowRight from "../../../assets/icons/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.svg";
import done from "../../../assets/icons/done_black_24dp.svg";
import search from "../../../assets/icons/search_FILL0_wght400_GRAD0_opsz48_white.svg";
import Button from '../../button/Button';
import TypeCheckbox from '../../input/TypeCheckbox';
import TypeText from '../../input/TypeText';
import SelectComp from '../../select/SelectComp';
import TableComp from '../../table/TableComp';

export interface ModalProps {
    openModal?: boolean;
    setOpenModal?: any;
}

interface DataType {
    room?: string;
    rank?: string;
    isEmpty?: any;
    bc?: any;
    status?: string;
    connect?: string;
    direction?: string;
    prop?: any;
}

const columns: ColumnsType<DataType> = [
    {
        title: " Phòng",
        dataIndex: "room",
        key: "room",
        width: "10%",
    },
    {
        title: "Hạng phòng",
        dataIndex: "rank",
        key: "rank",
        width: "12%",
    },
    {
        title: "Phòng trống",
        dataIndex: "isEmpty",
        key: "isEmpty",
        width: "6%",
        render: () => {
            return (<TypeCheckbox />)
        }
    },
    {
        title: "Bị chiếm",
        key: "bc",
        width: "6%",
        dataIndex: "bc",
        render: () => {
            return (<TypeCheckbox />)
        }
    },
    {
        title: "Trạng thái hiện tại",
        key: "status",
        width: "9%",
        dataIndex: "status",
    },
    {
        title: "Phòng thông nhau",
        key: "connect",
        width: "16%",
        dataIndex: "connect",
    },
    {
        title: "Hướng",
        key: "direction",
        width: "15%",
        dataIndex: "direction",
    },
    {
        title: "Thuộc tính",
        key: "prop",
        width: "26%",
        dataIndex: "prop",
    },
];

const data: DataType[] = [
    {
        room: "02",
        rank: "SUP",
        status: "OD",
        connect: "1101",
        direction: "CV",
        prop: "TT",
    },
    {
        room: "02",
        rank: "SUP",
        status: "OD",
        connect: "1101",
        direction: "CV",
        prop: "TT",
    },
    {
        room: "02",
        rank: "SUP",
        status: "OD",
        connect: "1101",
        direction: "CV",
        prop: "TT",
    },
    {
        room: "02",
        rank: "SUP",
        status: "OD",
        connect: "1101",
        direction: "CV",
        prop: "TT",
    },
    {
        room: "02",
        rank: "SUP",
        status: "OD",
        connect: "1101",
        direction: "CV",
        prop: "TT",
    },
    {
        room: "02",
        rank: "SUP",
        status: "OD",
        connect: "1101",
        direction: "CV",
        prop: "TT",
    },
    {
        room: "02",
        rank: "SUP",
        status: "OD",
        connect: "1101",
        direction: "CV",
        prop: "TT",
    },
    {
        room: "02",
        rank: "SUP",
        status: "OD",
        connect: "1101",
        direction: "CV",
        prop: "TT",
    },
    {
        room: "02",
        rank: "SUP",
        status: "OD",
        connect: "1101",
        direction: "CV",
        prop: "TT",
    },
    {
        room: "02",
        rank: "SUP",
        status: "OD",
        connect: "1101",
        direction: "CV",
        prop: "TT",
    },
    {
        room: "02",
        rank: "SUP",
        status: "OD",
        connect: "1101",
        direction: "CV",
        prop: "TT",
    },
];

const ModalRoom = ({ openModal, setOpenModal }: ModalProps) => {
    return (
        <>
            <Modal
                title="Chọn phòng"
                centered
                open={openModal}
                // onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
                width={"98vw"}
                footer={null}
            >
                <div className="">
                    <span>Từ ngày: <span>03/01/2023 </span> - Đến ngày: <span>05/01/2023</span></span>
                    <div className="form grid grid-cols-4">
                        <TypeText label='Số phòng' />
                        <SelectComp label='Tòa nhà' />
                        <SelectComp label='Thuộc tính' />
                        <SelectComp label='Loại' />
                        <SelectComp label='Cánh' />
                        <SelectComp label='Hướng' />
                        <div className="grid grid-cols-7">
                            <TypeText label='Từ tầng' wrapCss='col-span-3' />
                            <div className="flex items-center mt-1 mr-4">
                                <img
                                    className=" "
                                    src={arrowRight}
                                    alt=""
                                />
                            </div>
                            <TypeText label='Đến tầng' wrapCss='col-span-3' />
                        </div>
                        <SelectComp label='Trạng thái' />
                    </div>
                    <div className="grid grid-cols-4 " >
                        <TypeCheckbox label='Hiện tất cả' />
                        <TypeCheckbox label='Chỉ hiện phòng có sẵn' />
                        <Button wrapCss={`btn-primary text-white font-bold w-[126px]  col-start-4`} label='Tìm kiếm' src={search} labelCss="ml-4" />
                    </div>
                    <div className='pb-12 pt-8'>
                        <TableComp columns={columns} pagination={false} data={data} />
                    </div>

                    <div className=" flex ml-auto float-right my-6 -mt-8">
                        <Button handleClick={() => setOpenModal(false)} label='HỦY' wrapCss={`w-[60px] text-[14px] text-primary font-bold hover:bg-[#f7f1e6]`} />
                        <Button src={done} label='Chọn phòng' labelCss="ml-8" wrapCss={`w-[140px] text-[14px] ml-2 text-primary  font-bold bg-[#ece3d5] opacity-50`} />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalRoom
