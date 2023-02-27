import { Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';
import done from "../../../assets/icons/done_white_24dp.svg";
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
    card_number?: string;
    name?: string;
    type?: string;
    point?: string;
    used?: string;
    spent?: string;
    member?: string;
    date?: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Số thẻ",
        dataIndex: "card_number",
        key: "card_number",
        width: "6%",
    },
    {
        title: "Tên chủ thẻ",
        dataIndex: "name",
        key: "name",
        width: "6%",
    },
    {
        title: "Loại thẻ",
        dataIndex: "type",
        key: "type",
        width: "16%",
    },
    {
        title: "Điểm tích lũy",
        key: "point",
        width: "12.5%",
        dataIndex: "point",
    }, {
        title: "Số điểm đã dùng",
        key: "used",
        width: "12.5%",
        dataIndex: "used",
    },
    {
        title: "Tổng tiền đã chi",
        key: "spent",
        width: "12.5%",
        dataIndex: "spent",
    },
    {
        title: "Thành viên",
        key: "member",
        width: "12.5%",
        dataIndex: "member",
    }, {
        title: "Ngày phát hành thẻ",
        key: "date",
        width: "12.5%",
        dataIndex: "date",
    },

];

const data: DataType[] = [
    {
        card_number: "12346789",
        name: "Daniel Chan",
        type: "G - GOLD ",
        point: "226",
        used: "140",
        spent: "2.224.000đ",
        member: "Daniel Chan",
        date: "18/02/2021",
    }
];


const ModalVipCard = ({ openModal, setOpenModal }: ModalProps) => {
    return (
        <>
            <Modal
                title="Thông tin thẻ VIP"
                centered
                style={{ top: -100 }}
                open={openModal}
                // onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
                width={"98vw"}
                footer={null}
            >
                <div className="pb-20">
                    <div className="">
                        <div className="">
                            Thông tin thẻ VIP của đặt phòng
                        </div>
                        <div className="">
                            <span>Số thẻ: <span>123456789 </span> - Loại thẻ: <span>G - Gold</span></span>

                        </div>
                    </div>
                    <div className="">
                        <div className="">Tìm kiếm thông tin thẻ VIP</div>
                        <div className="grid grid-cols-3">
                            <TypeText label='Số thẻ' />
                            <TypeText label='Thành viên' />
                            <SelectComp label='Loại thẻ' />
                            <SelectComp label='Đối tượng khách' />
                            <TypeCheckbox label='Đang hoạt động' wrapCss='mt-2' />
                            <Button wrapCss={`btn-primary text-white font-bold w-[126px] mt-6`} label='Tìm kiếm' src={search} labelCss="ml-4" />
                        </div>
                    </div>
                    <div className='pb-12 pt-8 '>
                        <TableComp columns={columns} data={data} pagination={false} />
                    </div>
                    <div
                        className={` flex float-right mt-12 font-bold text-primary`}
                    >
                        <Button label='HỦY' handleClick={() => { setOpenModal(false) }} wrapCss={`w-[60px] text-primary  hover:bg-[#f7f1e6]`} />
                        <Button src={done} label='Lưu thông tin' wrapCss={`w-[160px]   text-primary text-white btn-primary ml-2 `} />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalVipCard
