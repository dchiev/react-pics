import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return (
      <img className="image" key={id} src={urls.regular} alt={description} />
    );
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
