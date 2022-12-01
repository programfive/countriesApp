import React from 'react'

 export function CardCountries({name,region,population,flag,capital,showDetails,code}) {
  const showDetailsHandler=()=>{
    showDetails(code)
  }
  return (
    <section className='w-full max-w-[280px] dark:bg-DarkBlue shadow-lg bg-slate-50 rounded-xl' onClick={showDetailsHandler}>
      <div>
        <img src={flag} alt="" className='rounded-t-xl h-40 w-full object-cover'/>
      </div>

      <div className='p-3'>
        <h2 className='text-2xl font-bold dark:text-gray-50 text-gray-700 '>{name}</h2>
        <div className=' text-xl dark:text-gray-100 text-gray-900'>
          <p>Population: <span className='dark:text-gray-300  text-gray-600'>{population}</span></p>
          <p>Region: <span className='dark:text-gray-300  text-gray-600'>{region}</span></p>
          <p>Capital: <span className='dark:text-gray-300  text-gray-600'>{capital}</span></p>
        </div>
      </div>
    </section>
  )
}

