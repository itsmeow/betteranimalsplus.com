import React from "react";
import { Slide } from "pure-react-carousel";
import CenterImage from "./centerImage";

const LinkSlide = ({ index, href, img, text, name }) => (
  <Slide index={index} className="menu-item" key={name}>
    <CenterImage className="hover-scale" href={href} img={img} alt={name} />
    <p>{text}</p>
  </Slide>
);

export default LinkSlide;
