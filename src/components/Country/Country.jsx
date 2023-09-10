import React, { useState } from 'react'

const Country = ({country}) => {
    const {name,population,region, flags} = country
    const [visited, setVisited] = useState(false)
    const handleVisited = ()=> setVisited(!visited)
   
  return (
    <div className={`border-2 border-blue-700 text-center p-4 m-4 ${visited && 'bg-blue-400'}`}>
      <h2 className='text-xl font-semibold'>Name: {name.common}</h2>
      
        <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <button onClick={handleVisited} className='btn bg-orange-200'>{visited ? 'Visited' : 'Going'}</button>
    </div>
  )
}

export default Country
