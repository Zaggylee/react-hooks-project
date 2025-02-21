import MovieList from "./movieList";
import NavBar from "./navBar";
import AddMovie from "./addMovie";
import FilterByRating from "./filterByRate";
import FilterByTitle from "./filterByTitle";
import MoreDetails from "./MoreDetails";
import { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("user_movies")) ?? [];
    setMovies(storedMovies);
  }, []);
  return (
    <>
      <NavBar />
      <div className="container mx-auto py-20 px-4">
        <h2>Welcome to my world of movies</h2>
        <div className="flex gap-6 pb-3">
          <AddMovie movies={movies} setMovieDetails={setMovies} />
          <FilterByTitle setMovies={setMovies} />
          <FilterByRating setMovies={setMovies} />
        </div>
      </div>
      <MovieList movies={movies} />
    </>
  );
}
export default Home;
