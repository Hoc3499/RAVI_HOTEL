
interface Props {
    src?: any;
    wrapCss?: string;
    label?: string;
    labelCss?: string;
    handleClick?: any;
}

const Button = ({ src, wrapCss, label, handleClick, labelCss }: Props) => {



    return (
        <div className={`${wrapCss} relative rounded h-9 text-center leading-9 cursor-pointer`} onClick={handleClick}>
            <span className={labelCss}>
                {label}
            </span>
            {src && <img
                className="absolute top-[10px] left-3 w-[16px] h-[16px]"
                src={src}
                alt=""
            />}
        </div>
    )
}

export default Button
