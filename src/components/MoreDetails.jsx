import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

function MoreDetails() {
  const navigate = useNavigate();
  //params retrieves the particular id from url
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  useEffect(() => {
    //to retrieve the movies from local storage
    const allMovies = JSON.parse(localStorage.getItem("user_movies"));
    //to find the particular id that matches the one in params
    const singleMovie = allMovies.find(
      (item) => item.movie_id === Number(params.movie_id)
    );
    //sets the movie to our usestate
    setMovieDetails(singleMovie);
  }, []);

  console.log(movieDetails);
  return (
    <section>
      <div className="flex justify-center gap-4 mt-4 pb-4">
        <p className="font-bold text-3xl">Movie Details</p>
        <button
          className="bg-amber-300 p-2 rounded-md font-medium cursor-pointer"
          onClick={() => navigate(-1)}
        >
          go back
        </button>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center">
        {/*iframe is used when getting a link from youtube */}
        <iframe
          width="560"
          height="315"
          src={movieDetails.trailer_link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p>{movieDetails.movie_description}</p>
      </div>
    </section>
  );
}
export default MoreDetails;
