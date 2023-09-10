import React, { useState } from "react";

const Country = ({ country, handleAddToList }) => {
  const { name, population, region, flags } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => setVisited(!visited);
  return (
    <div
      className={`border-2 border-blue-700 text-center p-4 m-4 ${
        visited && "bg-blue-400"
      }`}
    >
      <h2 className="text-xl font-semibold">Name: {name.common}</h2>

      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <div className="flex items-center justify-center">
        <button onClick={handleVisited} className="btn bg-orange-200 m-4">
          {visited ? "Visited" : "Going"}
        </button>
        <p style={{color: visited? 'white': 'brown'}}>{visited ? 'I have visited '+ name.common : 'I going to '+ name.common }</p>
      </div>
      <button
        onClick={() => handleAddToList(country)}
        className="btn btn-primary"
      >
        Add to list
      </button>
    </div>
  );
};

export default Country;
