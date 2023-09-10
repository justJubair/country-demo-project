import React from 'react'

const Country = ({country}) => {
    const {name,population,region, flags} = country
  return (
    <div className='border-2 border-blue-700 text-center p-4 m-4'>
      <h2 className='text-xl font-semibold'>Name: {name.common}</h2>
      
        <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Region: {region}</p>
    </div>
  )
}

export default Country
