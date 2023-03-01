import { ColumnsType } from "antd/es/table";
import { FastField, Form, Formik, FormikProps } from "formik";
import { useRef, useState } from "react";
import add from "../../../../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg";
import cancel from "../../../../assets/icons/cancel_FILL0_wght400_GRAD0_opsz48.svg";
import connecting_airports from "../../../../assets/icons/connecting_airports_black_24dp.svg";
import credit_card from "../../../../assets/icons/credit_card_FILL0_wght400_GRAD0_opsz48.svg";
import done from "../../../../assets/icons/done_black_24dp.svg";
import rename from "../../../../assets/icons/drive_file_rename_outline_FILL0_wght400_GRAD0__opsz48.svg";
import person from "../../../../assets/icons/person_pin_FILL0_wght400_GRAD0_opsz48.svg";
import Button from "../../../../components/button/Button";
import HeaderCustomerInfo from "../../../../components/header/HeaderCustomerInfo";
import InputSearch from "../../../../components/input/inputSearch";
import TextAreaComp from "../../../../components/input/TextAreaComp";
import TypeCheckbox from "../../../../components/input/TypeCheckbox";
import TypeDate from "../../../../components/input/TypeDate";
import TypeRadio from "../../../../components/input/TypeRadio";
import TypeText from "../../../../components/input/TypeText";
import ModalCustomer from "../../../../components/modal/modalCustomer/ModalCustomer";
import SelectComp from "../../../../components/select/SelectComp";
import TableComp from "../../../../components/table/TableComp";
import * as Yup from "yup";
import ChildFormik from "./ChildFormik";
import Image from "./Image";
import Action from "../../../../components/Action";

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
        width: "9%",
    },
    {
        title: "Khách chính",
        dataIndex: "customer",
        key: "customer",
        width: "7%",
    },
    {
        title: "Họ và tên",
        dataIndex: "name",
        key: "name",
        width: "14%",
    },
    {
        title: "Ngày đến",
        key: "checkin",
        width: "12.5%",
        dataIndex: "checkin",
    },
    {
        title: "Ngày đi",
        key: "checkout",
        width: "12.5%",
        dataIndex: "checkout",
    },
    {
        title: "SĐT",
        key: "phone",
        width: "13%",
        dataIndex: "phone",
    },
    {
        title: "Địa chỉ email",
        key: "email",
        width: "13%",
        dataIndex: "email",
    },
    {
        title: "Địa chỉ nơi ở ",
        key: "address",
        width: "19%",
        dataIndex: "address",
    },
];

const data: DataType[] = [];

const infoCustomerSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    bod: Yup.string().required("Required"),
    from: Yup.string().required("Required"),
    end: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    id: Yup.string().required("Required"),
    date_issue_id: Yup.string().required("Required"),
    place_issue_id: Yup.string().required("Required"),
});

const CustomerInfo = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const [path, setPath] = useState("");
    const [path2, setPath2] = useState("");

    const handleChangeInputFile = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            if (e.target.id === "img1") {
                setPath(reader.result as string);
            } else {
                setPath2(reader.result as string);
            }
        };
        reader.readAsDataURL(file);
    };

    return (
        <Formik
            initialValues={{
                profile: "",
                name: "",
                bod: "",
                gender: "",
                customer: [],
                rank: "",
                from: "",
                end: "",
                phone: "",
                email: "",
                id: "",
                date_issue_id: "",
                place_issue_id: "",
                note: "",
            }}
            onSubmit={(values, action) => {
                alert(JSON.stringify(values));
            }}
            validationSchema={infoCustomerSchema}
        >
            {(formikProps: FormikProps<any>) => {
                const { values, errors, touched } = formikProps;
                console.log({ values, errors, touched });
                return (
                    <Form>
                        <div className="flex flex-col border rounded">
                            <HeaderCustomerInfo label="Chỉnh sửa thông tin khách đặt" />
                            <div className=" grid grid-cols-4 ">
                                <div className=" mt-4 ml-4 ">
                                    <Image
                                        handleChangeInputFile={handleChangeInputFile}
                                        path={path}
                                        label="img1"
                                        wrapCss="mb-4"
                                    />
                                    <Image
                                        handleChangeInputFile={handleChangeInputFile}
                                        path={path2}
                                        label="img2"
                                    />
                                </div>
                                <div className=" col-span-3 mt-[13px] text-xs">
                                    <div className="  grid grid-cols-3  mb-5">
                                        {/* <InputSearch label="Hồ sơ" setOpenModal={setOpenModal} /> */}
                                        <FastField
                                            name="profile"
                                            component={InputSearch}
                                            label="Hồ sơ"
                                            setOpenModal={setOpenModal}
                                        />
                                        <ModalCustomer
                                            openModal={openModal}
                                            setOpenModal={setOpenModal}
                                        />
                                        <FastField
                                            name="name"
                                            component={TypeText}
                                            label="Họ và tên"
                                            require
                                            error={errors.name}
                                        />
                                        <FastField
                                            component={TypeDate}
                                            label="Ngày sinh"
                                            require
                                            nameInput="bod"
                                            error={errors.bod}
                                        />
                                        {/* gender */}
                                        <div className="">
                                            <span className="text-xs font-light">Giới tính</span>
                                            {/* <span className="text-red-500 ml-1">*</span> */}
                                            <div className="flex font-normal mt-[11px]">
                                                <FastField
                                                    name="gender"
                                                    component={TypeRadio}
                                                    value="male"
                                                    label="Nam"
                                                />
                                                {/* {props.errors.name && <p className="text-red-500">Name Required</p>} */}
                                                <FastField
                                                    name="gender"
                                                    component={TypeRadio}
                                                    value="female"
                                                    label="Nữ"
                                                />
                                            </div>
                                        </div>
                                        <div className="type">
                                            <div className="">
                                                <span className="text-xs ">Loại khách</span>
                                                <div className="flex mt-[11px]">
                                                    <FastField
                                                        name="customer"
                                                        component={TypeCheckbox}
                                                        label="Khách chính"
                                                        value="Khách chính"
                                                    />
                                                    <FastField
                                                        name="customer"
                                                        component={TypeCheckbox}
                                                        label="Trẻ em"
                                                        value="Trẻ em"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" grid grid-cols-3">
                                        <FastField
                                            component={SelectComp}
                                            label="Hạng khách"
                                            selectLabel="rank"
                                        />
                                        <FastField
                                            component={TypeDate}
                                            label="Ngày đến"
                                            nameInput="from"
                                            require
                                            error={errors.from}
                                        />
                                        <FastField
                                            component={TypeDate}
                                            label="Ngày đi"
                                            nameInput="end"
                                            require
                                            error={errors.end}
                                        />
                                        <div className=" flex flex-col border rounded mr-4 mb-[15px] mt-[20px] bg-[#25252514] font-[500] cursor-pointer relative">
                                            <div onClick={handleClick}>
                                                <div className="  py-[7px] rounded text-sm ml-[30px] text-center">
                                                    Thông tin xuất nhập cảnh
                                                </div>
                                                <img
                                                    className="absolute left-3 top-1 pr-2"
                                                    src={connecting_airports}
                                                    alt=""
                                                />
                                            </div>
                                            {isOpen && (
                                                <ChildFormik
                                                    formikProps={formikProps}
                                                    setIsOpen={setIsOpen}
                                                />
                                            )}
                                        </div>
                                        <FastField
                                            name="phone"
                                            component={TypeText}
                                            label="Số điện thoại"
                                            require
                                            error={errors.end}
                                        />
                                        <FastField
                                            name="email"
                                            component={TypeText}
                                            label="Email"
                                        />
                                        <FastField
                                            name="id"
                                            component={TypeText}
                                            label="Số CCCD"
                                            require
                                            error={errors.id}
                                        />
                                        <FastField
                                            component={TypeDate}
                                            label="Ngày cấp CCCD"
                                            nameInput="date_issue_id"
                                            require
                                            error={errors.date_issue_id}
                                        />
                                        <FastField
                                            name="place_issue_id"
                                            component={TypeText}
                                            label="Nơi cấp CCCD"
                                            require
                                            error={errors.place_issue_id}
                                        />
                                    </div>
                                    <div className="mb-4 mr-4">
                                        <FastField
                                            name="note"
                                            component={TextAreaComp}
                                            label="Lưu ý"
                                            rows={5}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mx-4 border ">
                                <div className="flex justify-between border mx-4 my-4 h-10 items-center cursor-pointer">
                                    <div className="relative mx-12">
                                        <img
                                            src={add}
                                            alt=""
                                            className="w-[20px] h-[20px] absolute top-[2px] -left-8"
                                        />
                                        <span className={`text-[14px] text-primary`}>
                                            Thêm khách mới
                                        </span>
                                    </div>
                                    <div className="flex ml-4 cursor-pointer">
                                        <Action description="Người đặt" src={person} wrapCss="" />
                                        <Action description="Gỡ bỏ khách" src={cancel} wrapCss="" />
                                        <Action description="Chỉnh sửa thông tin" src={rename} css="w-[100px]" />
                                        {/* <img
                                            src={cancel}
                                            alt=""
                                            className="w-[20px] h-[20px] mx-6"
                                        /> */}
                                        {/* <img src={rename} alt="" className="w-[20px] h-[20px]" /> */}
                                    </div>
                                </div>
                                <TableComp columns={columns} data={data} pagination={false} />
                            </div>
                            <div className=" flex ml-auto  my-6 mr-4 ">
                                <Button
                                    label="Đặt cọc"
                                    src={credit_card}
                                    wrapCss={`w-[120px] text-[14px] text-primary font-bold hover:bg-[#f7f1e6]`}
                                />
                                <Button
                                    src={done}
                                    label="Lưu thông tin"
                                    wrapCss={`w-[160px] text-[14px] ml-2 text-primary  font-bold bg-[#ece3d5] `}
                                    type="submit"
                                />
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default CustomerInfo;
