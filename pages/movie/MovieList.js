import Card from "@/components/Card";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";




const MovieList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    document.title = `Home/MoviesDB`;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=55ba11d7f869e89608994ad683b819e1&language=en-US&page=${currentPage}`
        );
        const data = await response.json();
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setTotalPages(data.total_pages);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const loadMoreData = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap size:justify-evenly">
          {movies.map((movie) => (            
              <Card  movie={movie} />            
          ))}
        </div>

        {isLoading && <p className="text-blue-500">Loading...</p>}
        {currentPage < totalPages && !isLoading && (
          <button
            onClick={loadMoreData}
            type="button"
            className="justify-content-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover-bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Load More..
          </button>
        )}
      </section>
    </main>
  );
};

export default MovieList;
