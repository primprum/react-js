// learn on how props actually works
import React from "react";

const UsingProps = ({ name, education }) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>{education}</p>
    </div>
  );
};

export default UsingProps;
