import { FavoritesCard } from '@/components/FavoritesCard';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [page, setPage] = useState(1); // Current page
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWJhMTFkN2Y4NjllODk2MDg5OTRhZDY4M2I4MTllMSIsInN1YiI6IjY0ZTM0MjRlMDc2Y2U4NDNiOWIwZjM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C5YcSlOQ16effb3mCE7l-p5AZxZm5QEssgTnCQLxN1k',
          },
        };

        const response = await fetch(
          `https://api.themoviedb.org/3/account/20331008/favorite/movies?api_key=55ba11d7f869e89608994ad683b819e1&language=en-US&page=${page}&sort_by=created_at.asc`,
          options
        );

        if (response.ok) {
          const data = await response.json();
          // Append the new movies to the existing list
          setFavoriteMovies((prevMovies) => [...prevMovies, ...data.results]);
        } else {
          setError('Error fetching favorite movies');
          
        }
      } catch (error) {
        setError('Error fetching favorite movies');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavoriteMovies();
  }, [page]);

  
  
  const loadMoreMovies = () => {
    // Increase the page number to fetch the next page of results
    setPage(page + 1);
  };
  
  const removeMovieFromFavorites = (movieId)=>{
    const updatedFavorites = favoriteMovies.filter((movie) => movie.id !== movieId);
    setFavoriteMovies(updatedFavorites);
  }

  return (
    <main>
      <section className="py-7 flex justify-center">
        <p className="text-3xl underline ml-4 text-gray-700 dark:text-white">Your Favorite Movies List</p>
      </section>
      <section className="max-w-7xl mx-auto py-4">
        <div className="flex justify-start flex-wrap">
          {favoriteMovies.map((movie) => (
            <FavoritesCard key={movie.id} movie={movie} onRemove={removeMovieFromFavorites}/>
          ))}
        </div>

        {isLoading && <p className="text-blue-500">Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && !error && (
          <button onClick={loadMoreMovies} className="text-white text-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2">
            Load More ...
          </button>
        )}
      </section>
  </main>
  );
};

export default Favorites;
