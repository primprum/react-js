import React from "react";
import UsingProps from "./components/UsingProps";
import PropsDefault from "./components/PropsDefault";
import ReactState from "./components/ReactState";

const App = () => {
  return (
    <>
      <UsingProps name="Prima Wirawan" education="Universitas Sriwijaya" />
      <PropsDefault title="This is the Props title" name="This is the props name" />
      <ReactState />
    </>
  );
};

export default App;
