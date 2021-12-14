import React from "react";

const MapFunc = () => {
  const companies = [
    {
      id: 1,
      name: "Company One",
      category: "Finance",
      start: 1981,
      end: 2003,
    },
    {
      id: 2,
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
      {/* this is somehow incorrect, only making it on the same line */}
      {/* <h1>{companiesName}</h1> */}

      {/* directly, without making function variable first */}
      {companies.map((company) => {
        return console.log(company.name);
      })}

      {/* best way to show it into the page */}
      {companies.map((company) => (
        <h1>{company.name}</h1>
      ))}
    </>
  );
};

export default MapFunc;
