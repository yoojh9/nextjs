import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "5d5173aff571c3d3f64f94d1b99849e5";

export default function Home() {
  const [movies, setMovies] = useState();
  
  useEffect(()=>{
    // (async () => {
    //   const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`)
    //   const data = await response.json();
    // })();

    (async () => {
      const {results} = await (await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`
      )).json()
      setMovies(results);
    })();
  },[])

  return (
      <div>
        <Seo title="Home"></Seo>
        {!movies && <h4>Loading...</h4>}
        {movies?.map(movie => <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>)}
      </div>
  );
}