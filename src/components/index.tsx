export { default as Home } from "./Home";
export { default as Village } from "./Village";

/* after you create the svg component, you can custom its size and color like below
const homeWithOtherProperties=<Home size="medium" color="#444"></Home>
*/

/* you can also custom a svgIcon by providing at least its path like below(all other atributes are optional, but viewBox property is recommeded)
 const customSvgIcon=<SvgIcon size="large" viewBox="0 0 512 512" color="blue"><path d="M150 0 L75 200 L225 200 Z"/></SvgIcon>
*/
