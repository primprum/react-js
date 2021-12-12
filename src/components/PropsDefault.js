// the default way of using props
import React from "react";

const PropsDefault = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.name}</h3>
    </div>
  );
};

export default PropsDefault;
