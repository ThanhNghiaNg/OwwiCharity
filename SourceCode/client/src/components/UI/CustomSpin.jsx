import { Spin } from "antd";
import React from "react";

function CustomSpin({ size, align, className }) {
    const alignSpin = align ? align: 'center'
  return (
    <div className={`text-${alignSpin} ${className}`}>
      <Spin size={size ? size : "md"} />
    </div>
  );
}

export default CustomSpin;
