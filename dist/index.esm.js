import React, { useState, useEffect } from 'react';

function SvgIcon({ color, size, viewBox, children, component: Component = "svg" }) {
  const [width, setWidth] = useState("16");
  const [height, setHeight] = useState("16");
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
        break;}

  }, [size]);
  return React.createElement(Component, { width: width, height: height, viewBox: viewBox, fill: color }, children);
}

function createSvgIcon(path, viewBox = "0 0 512 512", color = "", size = "small") {
  const Component = () => {
    return React.createElement(SvgIcon, { color: color, size: size, viewBox: viewBox }, path);
  };
  return Component;
}

const path = React.createElement("g", { id: "\u9875\u9762-2", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
React.createElement("g", { id: "VM\u9879\u76EE\u9700\u6C42\u5217\u8868-\u8BE6\u60C5", transform: "translate(-1552.000000, -743.000000)" },
React.createElement("g", { id: "\u7F16\u7EC4\u5907\u4EFD-6-copy-2", transform: "translate(1527.000000, 696.000000)" },
React.createElement("g", { id: "icon/detail\u5907\u4EFD-4", transform: "translate(25.000000, 47.000000)" },
React.createElement("circle", { id: "\u692D\u5706\u5F62", stroke: "#7A869A", cx: "8", cy: "8", r: "6.5" }),
React.createElement("line", { x1: "8", y1: "12", x2: "8", y2: "7", id: "\u8DEF\u5F84-4", stroke: "#7A869A", "stroke-linecap": "round" }),
React.createElement("circle", { id: "\u692D\u5706\u5F62", fill: "#7A869A", cx: "7.95", cy: "4.8", r: "1" })))));
const ExclamationInCircle = createSvgIcon(path, "0 0 16 16", "", "small");

// export { default as ExclamationInCircle } from "./ExclamationInCircle";

export { ExclamationInCircle as default };
