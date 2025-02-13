import { Input } from "antd";
import PropTypes from "prop-types";

function FilterByTitle(props) {
  const getMoviesByTitle = (value) => {
    const allMovies = JSON.parse(localStorage.getItem("user_movies")) ?? [];
    const filteredMovies = allMovies.filter((item) =>
      item.movie_title.toLowerCase().includes(value.toLowerCase())
    );

    props.setMovies(filteredMovies);
  };
  return (
    <Input
      onChange={(e) => getMoviesByTitle(e.target.value)}
      size="large"
      placeholder="Enter movie name"
    />
  );
}
export default FilterByTitle;
FilterByTitle.propTypes = {
  setMovies: PropTypes.func,
};
