import Link from "next/link";
import Backup from "../assets/backup.jpg";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';

const Card = ({movie}) => {
  const {id, original_title, overview, poster_path} = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: "/assets/backup"; 
  const [isFavorite, setIsFavorite] = useState(false)
  const [isActive, setIsActive] = useState(false);

  const router = useRouter()
  
  const handleAddFavorite = async ()=>{
    setIsActive(!isActive)
    const movieId = movie.id
    console.log(original_title)
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     accept: 'application/json',
    //     'content-type': 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWJhMTFkN2Y4NjllODk2MDg5OTRhZDY4M2I4MTllMSIsInN1YiI6IjY0ZTM0MjRlMDc2Y2U4NDNiOWIwZjM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C5YcSlOQ16effb3mCE7l-p5AZxZm5QEssgTnCQLxN1k'
    //   }
    // };
    
    // fetch('https://api.themoviedb.org/3/account/20331008/favorite', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));
    
    try{
      const response = await fetch(`https://api.themoviedb.org/3/account/20331008/favorite?api_key=55ba11d7f869e89608994ad683b819e1`,
        {
          method:"POST",
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWJhMTFkN2Y4NjllODk2MDg5OTRhZDY4M2I4MTllMSIsInN1YiI6IjY0ZTM0MjRlMDc2Y2U4NDNiOWIwZjM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C5YcSlOQ16effb3mCE7l-p5AZxZm5QEssgTnCQLxN1k'
          },
          body: JSON.stringify({
            media_type: 'movie',
            media_id: movieId,
            favorite: true,
          }),
        }      
      );
      
      
      if (response.ok) {        
        toast.success(`${original_title} is added to Favorites`); 
        // alert(`your movie named ${original_title} has been added to Favorites List`)
      } else {
         toast.error(`Error In Adding Movie to Favorites`);
      }
    }catch(error){
      
    }
    
  }
  
  
   
  
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 shadow-lg shadow-blue-500/50" >
      <Link href={`/movie/${id}`}>
          <img className="rounded-t-lg" style={{ height: "400px", width: "100%" }} src={image} alt={Backup} />
      </Link>
      <div className="p-5">
        <div className="flex flex-col md:flex-row justify-between items-center" href={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
          <button 
              onClick={handleAddFavorite} 
              type="button" 
              className="mt-3 md:mt-0 md:ml-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
          </svg>
          <span className="sr-only">Icon description</span>               
          </button>
             
        </div>        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview.length>300 ? `${overview.substring(0,300)} ....` : overview.trim()}</p>
      </div>
    </div>
  )
}
export default Card