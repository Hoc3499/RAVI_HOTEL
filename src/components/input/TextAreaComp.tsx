import React from 'react';
import { Input } from "antd";

interface TextAreaCompProps {
  label?: string;
  require?: any;
  rows?: number;
  wrapCss?: string;
}

const TextAreaComp = ({ label, require, rows, wrapCss }: TextAreaCompProps) => {
  const { TextArea } = Input;

  return (
    <div className={`${wrapCss}`}>
      <span className="font-light text-xs">{label}</span>
      {require && <span className="text-red-500 ml-1">*</span>}
      <TextArea rows={rows} />
    </div>
  )
}

export default TextAreaComp
