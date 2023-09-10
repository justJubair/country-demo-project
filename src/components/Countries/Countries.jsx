import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();

      setData(data);
    };
    loadData();
  }, []);
  const [goingList, setGoingList] = useState([]);
  const handleAddToList = (country) => {
    const updatedList = [...goingList, country];
    setGoingList(updatedList);
  };

  return (
    <div>
      <div className="text-center my-4">
        <h1 className="text-3xl m-2">Explore the world with React</h1>
        <h2 className="text-2xl font-semibold">Countries: {data.length}</h2>
        <ul className="m-4">
          {/* display item on the UI */}
          {goingList.map((country, index)=><div key={index} className="flex items-center gap-4 m-4">
            <li className="list-disc font-semibold">{country.name.common}</li>
            <img style={{width:'50px'}} src={country.flags.png} alt="" />
          </div>)}

        </ul>
      </div>
        <h3 className="text-xl font-semibold mx-4">Total: {goingList.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            handleAddToList={handleAddToList}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
