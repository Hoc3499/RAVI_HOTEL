import { DatePicker } from "antd";
import info from "../../assets/icons/info_red_24dp.svg";

interface DateProps {
    label?: string;
    wrapCss?: string;
    require?: any;
    field?: any;
    form?: any;
    nameInput?: string;
    error?: any;
}

const TypeDate = ({
    label,
    wrapCss,
    require,
    field,
    form,
    nameInput,
    error,
}: DateProps) => {
    return (
        <div
            className={`${wrapCss
                ? `${wrapCss} flex flex-col mr-4`
                : "flex flex-col mr-4 mb-[15px]"
                }`}
        >
            <div className="mb-1 text-xs">
                <label htmlFor="" className="font-light">
                    {label}
                </label>
                {require && <span className="text-red-500 ml-1">*</span>}
            </div>
            <div className="relative">

                <DatePicker
                    showToday={false}
                    placeholder=""
                    onChange={(date, dateString) =>
                        form.setFieldValue(nameInput, dateString)
                    }
                    className={`${error ? `border border-red-500 pl-2 py-[6px] rounded outline-none cursor-pointer w-full` : `border pl-2 py-[6px] rounded outline-none cursor-pointer w-full`}`}
                    renderExtraFooter={() => (
                        <div
                            className="flex float-right mr-[22px] mb-3"
                            onMouseDown={(e) => e.stopPropagation()}
                        >
                            <button>Hủy</button>
                            <button className="ml-8">Ok</button>
                        </div>
                    )}
                />
                {/* {error && (
                    <img src={info} alt="" className="absolute right-2 top-[6px]" />
                )} */}
            </div>

        </div>
    );
};

export default TypeDate;
