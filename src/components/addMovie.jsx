import React, { useState } from "react";
import { Button, Modal, Input, InputNumber } from "antd";
import PropTypes from "prop-types";

const AddMovie = (props) => {
  const [movieDetails, setMovieDetails] = useState({
    movie_id: 0,
    movie_posterUrl: "",
    movie_description: "",
    movie_rating: "",
    movie_title: "",
    trailer_link: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    if (movieDetails.movie_title.trim().length < 2) {
      return alert("please provide a valid movie name");
    }

    const randomId = Math.floor(Math.random() * 99999);
    props.setMovieDetails((prev) => [
      { ...movieDetails, movie_id: randomId },
      ...prev,
    ]);
    const moviesToStored =
      JSON.parse(localStorage.getItem("user_movies")) === null
        ? [{ ...movieDetails, movie_id: randomId }]
        : [
            ...JSON.parse(localStorage.getItem("user_movies")),
            { ...movieDetails, movie_id: randomId },
          ];
    localStorage.setItem("user_movies", JSON.stringify(moviesToStored));

    setMovieDetails({
      movie_rating: "",
      movie_description: "",
      movie_posterUrl: "",
      movie_title: "",
      trailer_link: "",
    });
    console.log("closing");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (value) => {
    setMovieDetails({ ...movieDetails, movie_rating: value });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add new movie
      </Button>
      <Modal
        title="Enter movie information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="grid gap-4">
          <Input
            value={movieDetails.movie_title}
            onChange={(e) =>
              setMovieDetails({ ...movieDetails, movie_title: e.target.value })
            }
            size="large"
            placeholder="Enter movie name"
          />
          <Input
            value={movieDetails.movie_posterUrl}
            onChange={(e) =>
              setMovieDetails({
                ...movieDetails,
                movie_posterUrl: e.target.value,
              })
            }
            size="large"
            placeholder="Enter image url"
          />
          <Input
            value={movieDetails.trailer_link}
            onChange={(e) =>
              setMovieDetails({
                ...movieDetails,
                trailer_link: e.target.value,
              })
            }
            size="large"
            placeholder="Enter trailer url"
          />

          <InputNumber
            value={movieDetails.movie_rating}
            onChange={(value) =>
              setMovieDetails({ ...movieDetails, movie_rating: value })
            }
            size="large"
            placeholder="rating"
          />

          <Input.TextArea
            value={movieDetails.movie_description}
            onChange={(e) =>
              setMovieDetails({
                ...movieDetails,
                movie_description: e.target.value,
              })
            }
            rows={5}
            placeholder="Describe your movie"
          />
        </div>
      </Modal>
    </>
  );
};
export default AddMovie;

AddMovie.propTypes = {
  setMovie: PropTypes.func,
};
