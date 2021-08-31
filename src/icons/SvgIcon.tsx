import React, { useState, useEffect } from "react";

interface SvgIconProp {
  color: string;
  size: string;
  viewBox: string;
  children: React.ReactNode;
  component?: any;
}

function SvgIcon({
  color,
  size,
  viewBox,
  children,
  component: Component = "svg",
}: SvgIconProp) {
  const [width, setWidth] = useState<string>("16");
  const [height, setHeight] = useState<string>("16");

  useEffect(() => {
    switch (size) {
      case "small":
        break;
      case "medium":
        setWidth("24");
        setHeight("24");
        break;
      case "large":
        setWidth("36");
        setHeight("36");
        break;
      default:
        setWidth("16");
        setHeight("16");
        break;
    }
  }, [size]);

  return (
    <Component width={width} height={height} viewBox={viewBox} fill={color}>
      {children}
    </Component>
  );
}

export default SvgIcon;
