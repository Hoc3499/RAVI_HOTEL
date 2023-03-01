import { ColumnsType } from "antd/es/table"
import file from "../../../../assets/icons/attach_file_black_24dp.svg"
import edit from "../../../../assets/icons/drive_file_rename_outline_FILL0_wght400_GRAD0__opsz48.svg"
import create from "../../../../assets/icons/edit_FILL0_wght400_GRAD0_opsz48.svg"
import credit_card from "../../../../assets/icons/credit_card_FILL0_wght400_GRAD0_opsz48.svg";
import done from "../../../../assets/icons/done_black_24dp.svg";
import Button from "../../../../components/button/Button"
import HeaderCustomerInfo from '../../../../components/header/HeaderCustomerInfo'
import DiscountInput from '../../../../components/input/DiscountInput'
import TextAreaComp from '../../../../components/input/TextAreaComp'
import TypeCheckbox from "../../../../components/input/TypeCheckbox"
import TypeDate from "../../../../components/input/TypeDate"
import TypeText from '../../../../components/input/TypeText'
import TypeTime from "../../../../components/input/TypeTime"
import SelectComp from '../../../../components/select/SelectComp'
import TableComp from "../../../../components/table/TableComp"
import Action from "../../../../components/Action";


interface DataType {
    pick?: string;
    number?: string;
    from?: string;
    end?: string;
    origin?: string;
    pickup?: string;
    isEmpty?: string;
    rank?: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Chọn",
        dataIndex: "pick",
        key: "pick",
        width: "7%",
        render: () => {
            return (<TypeCheckbox />)
        }
    },
    {
        title: "Số hợp đồng",
        dataIndex: "number",
        key: "number",
        width: "14%",
    },
    {
        title: "Từ ngày",
        dataIndex: "from",
        key: "from",
        width: "13%",
    },
    {
        title: "Đến ngày",
        key: "end",
        width: "13%",
        dataIndex: "end",
    }, {
        title: "Origin",
        key: "origin",
        width: "9%",
        dataIndex: "origin",
    },
    {
        title: "Pick up",
        key: "pickup",
        width: "9%",
        dataIndex: "pickup",
    },
    {
        title: "Phòng trống",
        key: "isEmpty",
        width: "12%",
        dataIndex: "isEmpty",
    }, {
        title: "Hạng phòng",
        key: "rank",
        width: "23%",
        dataIndex: "rank",
    }
];

const data: DataType[] = [
    {
        number: "28130",
        from: "30/01/2023",
        end: "30/01/2023",
        origin: "",
        pickup: "",
        isEmpty: "",
        rank: "",
    }
];

const OtherInfo = () => {
    return (
        <div className="">
            <div className='border rounded pb-4'>
                <HeaderCustomerInfo label='Thông tin người đặt' />
                <div className="grid grid-cols-3 gap-y-5 ml-4 mt-6 ">
                    <TypeText label="Mã định danh ngoài" />
                    <TypeText label="Phương tiện đến" />
                    <TypeText label="Phương tiện đi" />
                    <TypeText label="Giới hạn tín dụng" />
                    <TypeDate label="Thời gian đến" />
                    <TypeDate label="Thời gian đi" />
                    <TextAreaComp label="Ghi chú nhắc nhở" wrapCss="row-span-2 pr-4 mt-[-4px]" rows={6} />
                    <TypeDate label="Thời gian đón khách" />
                    <TypeTime label="Giờ đón khách" />
                    <TypeDate label="Thời gian trả khách" />
                    <TypeTime label="Giờ trả khách" />
                </div>
                <div className=" py-3 ml-4 mt-[15px]">
                    <span className=" font-bold text-xl ">Thông tin hóa đơn & phòng</span>
                    <div className="grid grid-cols-3 mt-[22px]">
                        <TypeText label="Tên công ty" />
                        <SelectComp label='Tòa nhà' />
                        <SelectComp label='Cánh phòng' />
                        <TypeText label="Địa chỉ" />
                        <TypeText label="Từ tầng" />
                        <TypeText label="Đến tầng" />
                        <TypeText label="Mã số thuế" />
                        <SelectComp label='Hướng phòng' />
                        <SelectComp label='Thuộc tính phòng' />
                    </div>
                    <TextAreaComp label="Yêu cầu đặc biệt" wrapCss="mr-4" rows={5} />
                </div>
                <div className="  mx-4  mt-1 pt-3">
                    <span className=" font-bold text-xl ">Đại lý du lịch/Allotment</span>
                    <div className="grid grid-cols-3 mt-[22px]">
                        <div className="col-span-2">
                            <div className="grid grid-cols-2">
                                <SelectComp label='Đại lý du lịch 1' />
                                <SelectComp label='Đại lý du lịch 2' />
                                <DiscountInput label="Phần trăm hoa hồng" img="percent" />
                                <DiscountInput img="money" label="Số tiền hoa hồng" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="border rounded mt-8">
                <div className="flex justify-between border mx-4 my-4 h-10 items-center ">
                    <div className="relative mx-12">
                        <img src={create} alt="" className="w-[20px] h-[20px] absolute top-[2px] -left-8" />
                        <span className={`text-[14px] text-primary`}>Thêm/ sửa dịch vụ đặc biệt</span>
                    </div>
                    <div className="flex mx-4 cursor-pointer">
                        {/* <img src={edit} alt="" className="w-[20px] h-[20px]" />
                        <img src={file} alt="" className="w-[20px] h-[20px] ml-6" /> */}

                        <Action description="Đính kèm file" src={file} css="w-[65px]" />
                        <Action description="Sửa thông tin" src={edit} css="w-[70px]" wrapCss="-mr-4" />
                    </div>
                </div>
                <TableComp columns={columns} data={data} pagination={false} />
            </div>
            <div className=" flex ml-auto float-right my-6 mr-4 ">
                <Button
                    // handleClick={() => setOpenModalDeposit(true)}
                    label="Đặt cọc"
                    src={credit_card}
                    wrapCss={`w-[120px] text-[14px] text-primary font-bold hover:bg-[#f7f1e6]`}
                />
                <Button
                    src={done}
                    label="Lưu thông tin"
                    wrapCss={`w-[160px] text-[14px] ml-2 text-primary  font-bold bg-[#ece3d5] opacity-50`}
                />
            </div>
        </div>
    )
}

export default OtherInfo
