import React from "react";
import SvgIcon from "./SvgIcon";

function createSvgIcon(
  path: React.ReactNode,
  viewBox: string = "0 0 512 512",
  color: string = "",
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
