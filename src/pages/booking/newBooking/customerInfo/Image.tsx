import React from "react";

interface Props {
    path?: string;
    handleChangeInputFile?: any;
    wrapCss?: string;
    label?: string;
}

const Image = ({ handleChangeInputFile, path, wrapCss, label }: Props) => {
    return (
        <>
            <label
                htmlFor={label}
                className={`${wrapCss
                        ? ` relative w-[calc(100%-16px)] h-[202.5px] bg-[#F3F3F3] block rounded ${wrapCss}  cursor-pointer`
                        : "relative w-[calc(100%-16px)] h-[202.5px] bg-[#F3F3F3] block rounded cursor-pointer"
                    }`}
            >
                <input
                    id={label}
                    onChange={handleChangeInputFile}
                    name={label}
                    type="file"
                    className="opacity-0"
                />
                <img
                    src={path}
                    alt=""
                    className="absolute top-0 w-full h-full object-contain"
                />
            </label>
        </>
    );
};

export default Image;
