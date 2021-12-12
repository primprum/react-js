// learn on how props actually works (the other way)
import React from "react";

// you need this for propTypes, type "impt"
import PropTypes from "prop-types";

// const UsingProps = ({ name, education }) => {
//   return (
//     <div>
//       <h3>Name: {name}</h3>
//       <p>{education}</p>
//     </div>
//   );
// };

const UsingProps = ({ name }) => {
  // eventhough it's only one parameter, still needs a curly bracket, otherwise there'll be error
  return (
    <div>
      <h3>Name: {name}</h3>
    </div>
  );
};

// if you wanna use default value
UsingProps.defaultProps = {
  name: "Prima Wirawan",
};

// set default type, add isRequired if necessary
UsingProps.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UsingProps;
