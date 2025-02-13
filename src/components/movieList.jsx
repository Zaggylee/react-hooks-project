import MovieCard from "./movieCard";
import PropTypes from "prop-types";

function MovieList(props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {props.movies.map((item) => {
        return (
          <MovieCard
            key={item.movie_id}
            movie_posterUrl={item.movie_posterUrl}
            movie_title={item.movie_title}
            movie_description={item.movie_description}
            movie_rating={item.movie_rating}
          />
        );
      })}
    </section>
  );
}
export default MovieList;
MovieList.propTypes = {
  movies: PropTypes.array,
};
