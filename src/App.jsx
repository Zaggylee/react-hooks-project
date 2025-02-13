import { useState, useEffect } from "react";
import MovieList from "./components/movieList";
import NavBar from "./components/navBar";
import AddMovie from "./components/addMovie";
import FilterByTitle from "./components/filterByTitle";
import FilterByRating from "./components/filterByRate";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("user_movies")) ?? [];
    setMovies(storedMovies);
  }, []);
  return (
    <section>
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
    </section>
  );
}
export default App;
