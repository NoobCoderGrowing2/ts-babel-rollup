import React from "react";
import createSvgIcon from "../createSvgIcon";

const path: React.ReactNode = (
  <g id="页面-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g
      id="VM项目需求列表-详情"
      transform="translate(-1552.000000, -743.000000)"
    >
      <g id="编组备份-6-copy-2" transform="translate(1527.000000, 696.000000)">
        <g id="icon/detail备份-4" transform="translate(25.000000, 47.000000)">
          <circle id="椭圆形" stroke="#7A869A" cx="8" cy="8" r="6.5"></circle>
          <line
            x1="8"
            y1="12"
            x2="8"
            y2="7"
            id="路径-4"
            stroke="#7A869A"
            stroke-linecap="round"
          ></line>
          <circle id="椭圆形" fill="#7A869A" cx="7.95" cy="4.8" r="1"></circle>
        </g>
      </g>
    </g>
  </g>
);

const ExclamationInCircle = createSvgIcon(path, "0 0 16 16", "", "small");

export default ExclamationInCircle;
