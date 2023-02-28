import React from "react";

const ProductBox = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} alt="mobile" />
      </div>
      <div>
        <h4>{props.title}</h4>
        <span>${props.price}</span>
      </div>
    </div>
  );
};

export default ProductBox;
