import React from "react";

const MapFunc = () => {
  const companies = [
    {
      name: "Company One",
      category: "Finance",
      start: 1981,
      end: 2003,
    },
    {
      name: "Company Two",
      category: "Retail",
      start: 1992,
      end: 2008,
    },
  ];

  //   const companiesName = companies.map((company) => {
  //     return company.name;
  //   });

  return (
    <>
      {/* <h1>{companiesName}</h1> */}

      {/* directly, without making function variable first */}
      {companies.map((company) => {
        return console.log(company.name);
      })}
    </>
  );
};

export default MapFunc;
