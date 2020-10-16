import React from "react";

const Video = (props) => {
  return (
    <video width="1200" height="800" controls>
      <source src={props.src} type={props.format} />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
