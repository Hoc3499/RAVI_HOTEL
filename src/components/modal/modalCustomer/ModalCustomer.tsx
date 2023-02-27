import { Modal, Row } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import note from "../../../assets/icons/add_notes_FILL0_wght400_GRAD0_opsz48.svg";
import demography from "../../../assets/icons/demography_FILL0_wght400_GRAD0_opsz48.svg";
import search from "../../../assets/icons/search_FILL0_wght400_GRAD0_opsz48_white.svg";
import Button from '../../button/Button';
import TypeText from '../../input/TypeText';
import TableComp from '../../table/TableComp';
import ModalCreateFile from './ModalCreateFile';


interface ModalProps {
    openModal: boolean;
    setOpenModal: any;
}

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
        width: "7%",
    },
    {
        title: "Họ",
        dataIndex: "firstName",
        key: "firstName",
        width: "8.5%",
    },
    {
        title: "Tên",
        dataIndex: "lastName",
        key: "lastName",
        width: "8.5%",
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
        width: "9%",
        dataIndex: "id",
    },
    {
        title: "Địa chỉ email",
        key: "email",
        width: "10.5%",
        dataIndex: "email",
    },
    {
        title: "Số điện thoại",
        key: "phone",
        width: "9%",
        dataIndex: "phone",
    },
    {
        title: "Địa chỉ",
        key: "address",
        width: "15%",
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
    }
];

const pagination = {
    defaultPageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "30", "40", "50"],
    showQuickJumper: true,
}

const TableFooter = () => {
    return (
        <Row className="float-right p-0">
            Số bản ghi: 8715
        </Row>
    )
}

const ModalCustomer = ({ openModal, setOpenModal }: ModalProps) => {
    const [openCreateFileModal, setOpenCreateFileModal] = useState(false)
    const handleClose = () => {
        setOpenModal(false)
    }
    const handleOpenCreateFileModal = () => {
        setOpenCreateFileModal(true)
    }
    return (
        <>
            <Modal
                title="Gắn hồ sơ khách vào đặt phòng"
                centered
                open={openModal}
                // onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
                width={"98vw"}
                bodyStyle={{}}
                footer={null}
            >
                <div className="">
                    <div className="form grid grid-cols-4 mb-5">
                        <TypeText label='Họ và tên khách hàng' />
                        <TypeText label="Số điện thoại" />
                        <TypeText label="Địa chỉ" />
                        <TypeText label="Địa chỉ email" />
                        <TypeText label="Hộ chiếu/Thẻ căn cước" />
                        <TypeText label="Quốc tịch" />
                        <Button wrapCss={`btn-primary text-white font-bold w-[126px] mt-[20px]`} label='Tìm kiếm' src={search} labelCss="ml-4" />
                    </div>
                    <TableComp columns={columns} pagination={pagination} data={data} footer={<TableFooter />} scroll={422} />
                    <div className="footer -mt-7 flex float-right cursor-pointer" >
                        <Button label='HỦY' handleClick={handleClose} wrapCss={`w-[60px] text-primary font-bold hover:bg-[#f7f1e6]`} />
                        <Button src={note} label='Thêm hồ sơ' handleClick={handleOpenCreateFileModal} wrapCss={`w-[140px] pl-6 mx-2 text-primary border font-semibold`} />
                        <ModalCreateFile open={openCreateFileModal} setOpen={setOpenCreateFileModal} />
                        <Button src={demography} label='GÁN  HỒ SƠ' wrapCss={`w-[130px] pl-6 text-primary bg-[#ece3d5]  font-bold`} />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalCustomer
