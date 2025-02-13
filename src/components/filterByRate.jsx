import { Input } from "antd";
import PropTypes from "prop-types";

function FilterByRating(props) {
  const getMoviesByRating = (value) => {
    const allMovies = JSON.parse(localStorage.getItem("user_movies")) ?? [];
    const filteredMovies = allMovies.filter(
      (item) => item.movie_rating.toString() === value
    );

    props.setMovies(filteredMovies);
  };
  return (
    <Input
      onChange={(e) => getMoviesByRating(e.target.value)}
      size="large"
      placeholder="Enter movie rating"
    />
  );
}
export default FilterByRating;
FilterByRating.propTypes = {
  setMovies: PropTypes.func,
};
