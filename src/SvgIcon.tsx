import React, { useState, useEffect } from "react";

interface SvgIconProp {
  color: string;
  size: string;
  viewBox: string;
  children: Array<React.SVGProps<SVGElement>>;
  component?: any;
}

function SvgIcon({
  color,
  size,
  viewBox,
  children,
  component: Component = "svg",
}: SvgIconProp) {
  const [width, setWidth] = useState<string>("24");
  const [height, setHeight] = useState<string>("24");

  useEffect(() => {
    switch (size) {
      case "small":
        break;
      case "medium":
        setWidth("36");
        setHeight("36");
        break;
      case "large":
        setWidth("48");
        setHeight("48");
        break;
      default:
        break;
    }
  }, [size]);

  return (
    <Component
      width={width || "24"}
      height={height || "24"}
      viewBox={viewBox || "0 0 256 256"}
      fill={color || "#333"}
    >
      {...children}
    </Component>
  );
}

export default SvgIcon;
