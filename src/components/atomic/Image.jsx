import React from "react";

const Image = (props) => {
  return (
    <img
      src={process.env.PUBLIC_URL + props.src}
      alt={props.alt}
      className={props.classes ? props.classes : ""}
      loading="lazy"
    ></img>
  );
};

export default Image;
