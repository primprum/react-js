import React from "react";
// it is said that from React 17, it doesn't require this anymore, but somehow there's still error without it
// perhaps it's got anything to do with Babel or Typescript

import UsingProps from "./components/UsingProps";
import PropsDefault from "./components/PropsDefault";

import ReactState from "./components/ReactState";

import MapFunc from "./components/MapFunc";

const App = () => {
  return (
    <>
      <UsingProps name="Prima Wirawan" education="Universitas Sriwijaya" />
      <UsingProps /> {/* use the default value */}
      <UsingProps name={1} /> {/* this will return error on console.log */}
      <PropsDefault title="This is the Props title" name="This is the props name" />
      <ReactState />
      <MapFunc />
    </>
  );
};

export default App;
