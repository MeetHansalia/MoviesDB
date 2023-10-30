import React, { useState, useEffect } from 'react'

const useFetch = (apiPath, queryTerm="") => {
    const [data ,setData] = useState([]);
    const url = apiPath
    useEffect(()=>{
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results)
        }
        fetchMovies();
      },[url])
  return (
    {data}
  )
}

export default useFetch;