import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
     
      setData(data);
      console.log(data)
    };
    loadData();
  }, []);
  return (
    <div>
        <div className="text-center my-4">
        <h1 className="text-3xl m-2">Explore the world with React</h1>
        <h2 className="text-2xl font-semibold">Countries: {data.length}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
           {data.map(country=><Country country={country} key={country.cca3}></Country>)}
        </div>
    </div>
  );
};

export default Countries;
