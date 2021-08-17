import React from "react";
import SvgIcon from "./SvgIcon";

function createSvgIcon(
  path: Array<React.SVGProps<SVGElement>>,
  viewBox: string = "0 0 256 256",
  color: string = "#333",
  size: string = "small"
) {
  const Component = () => {
    return (
      <SvgIcon color={color} size={size} viewBox={viewBox}>
        {path}
      </SvgIcon>
    );
  };

  return Component;
}

export default createSvgIcon;
