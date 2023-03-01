import { Field, Form, Formik, FormikProps } from 'formik';
import React from 'react'
import Button from '../../../../components/button/Button';
import TypeDate from '../../../../components/input/TypeDate';
import TypeText from '../../../../components/input/TypeText';
import SelectComp from '../../../../components/select/SelectComp';
import done from "../../../../assets/icons/done_black_24dp.svg";

interface Props {
    formikProps?: any;
    setIsOpen?: any;
}

const ChildFormik = ({ setIsOpen, formikProps }: Props) => {
    const handleClick = (values: any) => {
        console.log("[submit]", values)
    }
    return (
        (
            <Formik
                initialValues={{
                    visa_type: "",
                    place_issue_visa: "",
                    date_issue_visa: "",
                    job: "",
                    purpose: "",
                    username: "",
                    in: "",
                    out: "",
                    gate: "",
                    passport_type: "",
                }}
                onSubmit={(values, actions) => {
                    // alert(JSON.stringify(values));
                    alert("dcm")
                }}
            >
                {(formikProps) => {
                    const { values, errors, touched } = formikProps;
                    console.log(values)
                    return (
                        <div>
                            <div className="absolute w-[250%] h-[419px] mt-10 bg-white drop-shadow-lg z-[100] ">
                                <div className="ml-4 my-4  grid grid-cols-2">
                                    <Field
                                        name="visa_type"
                                        component={TypeText}
                                        label="Loại Visa"
                                    />
                                    <Field
                                        name="place_issue_visa"
                                        component={TypeText}
                                        label="Nơi cấp"
                                    />
                                    <Field
                                        component={TypeDate}
                                        label="Ngày cấp"
                                        nameInput="date_issue_visa"
                                    />
                                    <Field
                                        name="job"
                                        component={TypeText}
                                        label="Nghề nghiệp"
                                    />
                                    <Field
                                        name="purpose"
                                        component={TypeText}
                                        label="Mục đích"
                                    />
                                    <Field
                                        name="username"
                                        component={TypeText}
                                        label="Họ và tên"
                                    />
                                    <Field
                                        component={TypeDate}
                                        label="Ngày nhập từ"
                                        nameInput="in"
                                    />
                                    <Field
                                        component={TypeDate}
                                        label="Ngày nhập đến"
                                        nameInput="out"
                                    />
                                    <Field
                                        component={SelectComp}
                                        label="Cổng vào"
                                        selectLabel="gate"
                                    />
                                    <Field
                                        name="passport_type"
                                        component={TypeText}
                                        label="Loại hộ chiếu"
                                    />
                                </div>
                                <div
                                    className={` flex absolute right-0 mr-4 bottom-3 font-bold text-primary`}
                                >
                                    <Button
                                        label="HỦY"
                                        handleClick={() => setIsOpen(false)}
                                        wrapCss={`w-[60px] text-primary  hover:bg-[#f7f1e6]`}
                                    />
                                    <Button
                                        src={done}
                                        label="Lưu thông tin"
                                        wrapCss={`w-[160px]  text-primary ml-2  bg-[#ece3d5] `}
                                        handleClick={() => handleClick(values)}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Formik>
        )
    )
}

export default ChildFormik
