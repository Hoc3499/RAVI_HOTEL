import React from 'react'

interface Props {
    src?: any;
    description?: string;
    wrapCss?: string;
    css?: string;
    onClick?: any;

}

const Action = ({ description, src, wrapCss, css, onClick }: Props) => {
    return (
        <div className={`group/item ${wrapCss} w-10 relative`} >
            <img src={src} alt="" className="w-[20px] h-[20px]" onClick={onClick} />
            <p className={`group/edit invisible  group-hover/item:visible text-[10px] text-white  ${css} rounded bg-gray-800 absolute top-8 -left-6 z-10`}>
                {description}
            </p>
        </div>
    )
}

export default Action
