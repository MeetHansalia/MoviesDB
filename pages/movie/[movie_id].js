import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Backup from "/assets/backup.jpg"
import Link from 'next/link'
import CastList from './CastList'



const MovieDetail = () => {
    // const params = useParams();
    // console.log(params)
    const [ movie, setMovie ]= useState({});
    const [cast, setCast] = useState([]);
    const router = useRouter()
    const id = router.query.movie_id
    const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: Backup; 
  
    // const bgImageElement = document.getElementById('bgImage');

    // bgImageElement.style.background = `url(${image})`;
    // bgImageElement.style.backgroundSize = 'cover'; 
    const fetchCast = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=55ba11d7f869e89608994ad683b819e1`);
      const json = await response.json();
      setCast(json.cast || []);
    };
    // console.log(cast)
    
   
    useEffect(()=>{
      async function fetchMovie(){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=55ba11d7f869e89608994ad683b819e1&language=en-US&page=1`);
        const json = await response.json()
        setMovie(json);
        // console.log(json)
        
        
        // async function fetchCast() {
        //   const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=55ba11d7f869e89608994ad683b819e1`);
        //   const json = await response.json();
        //   setCast(json.cast);
        // }
        // const bgImageElement = document.getElementById('bgImage');
        // if (bgImageElement) {
        //   const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'Backup';
        //   bgImageElement.style.background = `url(${image})`;
        //   bgImageElement.style.backgroundSize = 'cover';
        //   bgImageElement.style.height = "200px"
        // }
      }
      fetchMovie()
      fetchCast()
    },[])
    
    useEffect(()=>{
      document.title = `${movie.title}/ MoviesDB`
    })
    
      
    // console.log("id=====>", id)
    
    
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-full md:max-w-sm lg:max-w-md xl:max-w-lg">
          <img className="w-full rounded" src={image} alt={movie.title} />
        </div>

        <div className="max-w-full md:max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-2 text-center lg:text-left">
            {movie.title}
          </h1>
          <p className="my-4">{movie.overview ? movie.overview.length > 300 ? `${movie.overview.substring(0, 300)} ....` : movie.overview.trim() : "Overview not available"}</p>

          {movie.genres ? (
            <div className="my-7 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2" key={genre.id}>{genre.name}</span>
              ))}</div>) : ('')}

          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 text-sm text-gray-900 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">
              {movie.vote_count} reviews
            </span>
          </div>
          <p className="my-4 dark:text-white">
            <span className="mr-2 font-bold">RunTime:</span>
            <span>{movie.runtime} min.</span>
          </p>
          {/* <p className="my-4 dark:text-white">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.budget}</span>
          </p> */}
          <p className="my-4 dark:text-white">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie.revenue}</span>
          </p>
          <p className="my-4 dark-text-white">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movie.release_date}</span>
          </p>
          <p className="my-4 dark:text-white">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <Link className="text-blue-500" href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank">{movie.imdb_id}</Link>
          </p>
          
          <CastList  cast={cast} /> 
        </div>
      </section>
    </main>
  )
} 
export default MovieDetail