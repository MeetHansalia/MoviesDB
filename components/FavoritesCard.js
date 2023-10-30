import React from 'react'
import { Backup } from '/assets/backup.jpg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';

export const FavoritesCard = ({movie, onRemove}) => {
   const {id, original_title, overview, poster_path} = movie;
   const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: "/assets/backup.jpg" 
   
   const router = useRouter()
   
   const handleRemoveMovie = ()=>{
       onRemove(id)
       toast.success(`${original_title} is been removed from Favorites`)
   }
  
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 shadow-lg shadow-blue-500/50">
      <Link href={`/movie/${id}`}>
        <img className="rounded-t-lg" style={{ height: "400px", width: "100%" }} src={image} alt={Backup} />
      </Link>
      <div className="p-5">
            <div className="flex flex-col md:flex-row justify-between items-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
            <button onClick={handleRemoveMovie} type="button" className="mt-3 md:mt-0 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center md:mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Remove
            </button>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview.length > 300 ? `${overview.substring(0, 300)} ....` : overview.trim()}
            </p>
      </div>
    </div>
  )
}
