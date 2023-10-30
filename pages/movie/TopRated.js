import React from 'react'
import useFetch from '@/hooks/useFetch'
import Card from '@/components/Card'
import { useEffect,useState } from 'react'



const TopRated = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = 'Top Rated/MoviesDB';
    fetchTopRatedMovies(page);
  }, [page]);

  const fetchTopRatedMovies = async (currentPage) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=55ba11d7f869e89608994ad683b819e1&language=en-US&page=${currentPage}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching top-rated movies:', error);
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>

        {isLoading && <p className="text-blue-500">Loading...</p>}
        {movies.length > 0 && !isLoading && (
          <button onClick={handleLoadMore} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2">
            Load More ...
          </button>
        )}
      </section>
    </main>
  );
};

export default TopRated;
