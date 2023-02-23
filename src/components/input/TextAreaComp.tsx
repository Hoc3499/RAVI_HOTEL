import React from 'react';
import { Input } from "antd";

interface TextAreaCompProps {
  label?: string;
  require?: any;
  rows?: number;
}

const TextAreaComp = ({ label, require, rows }: TextAreaCompProps) => {
  const { TextArea } = Input;

  return (
    <div>
      <span className="">{label}</span>
      {require && <span className="text-red-500 ml-1">*</span>}
      <TextArea rows={rows} />
    </div>
  )
}

export default TextAreaComp
