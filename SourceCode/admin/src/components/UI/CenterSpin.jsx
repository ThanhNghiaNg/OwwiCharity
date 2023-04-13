import React from "react";
import { Spin } from "antd";
function CenterSpin(props) {
  const size = props.size ? props.size : "md";
  return (
    <div className="text-center">
      <Spin size={size} />
    </div>
  );
}

export default CenterSpin;
