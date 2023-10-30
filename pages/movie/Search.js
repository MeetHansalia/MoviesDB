import useFetch from "@/hooks/useFetch"
import Card from "@/components/Card"
import { useRouter } from "next/router";
import { useEffect } from "react";


const Search = () => {
  const router = useRouter();
  const queryTerm = router.query.q;
  const {data: movies} = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=55ba11d7f869e89608994ad683b819e1&query=${queryTerm}&language=en-US&page=1`)
  useEffect(()=>{
    document.title = `Search Result For ${queryTerm}/MoviesDB`
  })
  
  return (
    <main>
    <section className="py-7">
      <p className="text-3xl ml-4 text-gray-700 dark:text-white">{movies.length === 0 ? `No Result Found for '${queryTerm}'` : `Result for '${queryTerm}'`} </p>
    </section>           
     <section className="max-w-7xl mx-auto py-4">
      <div className="flex justify-start flex-wrap "> 
          {movies.map((movie)=>(
            <Card key={movie.id} movie={movie}/>
          ))}     
        </div>
     </section>
    </main>
  )
}


export default Search