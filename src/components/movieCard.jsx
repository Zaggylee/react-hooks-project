import PropTypes from "prop-types";
import { Card } from "antd";
const { Meta } = Card;

function MovieCard(props) {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          className="w-[300px] h-[300px] object-center object-cover"
          src={props.movie_posterUrl}
        />
      }
    >
      <Meta
        title={props.movie_title}
        description={
          <div>
            <p>{props.movie_description}</p>
            <p>Ratings :{props.movie_rating}</p>
          </div>
        }
      />
    </Card>
  );
}
export default MovieCard;

MovieCard.PropTypes = {
  movie_title: PropTypes.string,
  movie_description: PropTypes.string,
  movie_posterUrl: PropTypes.string,
  movie_rating: PropTypes.number,
};
