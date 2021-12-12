// learn on how props actually works (the other way)
import React from "react";

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

export default UsingProps;
