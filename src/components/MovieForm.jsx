import React, { useEffect, useState } from "react";
import { getMovie, saveMovie } from "../services/moviesServices";
import { getGenres } from "../services/genreServices";
import Joi from "joi-browser";
import Form from "./reusable/Form";

const MovieForm = ({ match, history }) => {
  const [data, setData] = useState({
    title: "",
    genreId: "",
    numberInStock: "",
    dailyRentalRate: "",
  });
  const [genres, setGenres] = useState([]);

  const populateGenres = async () => {
    const { data: genres } = await getGenres();
    setGenres(genres);
  };

  const populateMovie = async () => {
    try {
      if (match.params.id === "new") return;
      const { data: movie } = await getMovie(match.params.id);

      setData(mapToViewModel(movie));
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return history.replace("/not-found");
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      await populateGenres();
      await populateMovie();
    }

    fetchData();
  }, []);

  const mapToViewModel = (movie) => ({
    _id: movie._id,
    title: movie.title,
    genre: movie.genre.name,
    genreId: movie.genre._id,
    numberInStock: movie.numberInStock,
    dailyRentalRate: movie.dailyRentalRate,
  });

  const schema = {
    title: Joi.string().min(5).max(30).required().label("Title"),
    numberInStock: Joi.number()
      .min(1)
      .max(100)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
    genreId: Joi.string().label("Genre"),
    _id: Joi.string().label("MovieId"),
    genre: Joi.string().label("Genre"),
  };

  const inputProps = [
    { name: "title", type: "text", label: "Title" },
    { name: "numberInStock", type: "number", label: "Number in Stock" },
    { name: "dailyRentalRate", type: "number", label: "Rate" },
  ];

  const selectOptions = {
    name: "genreId",
    label: "Genre",
    options: [...genres],
  };

  const handleSubmitData = async (newMovie) => {
    await saveMovie(newMovie);

    history.push("/");
  };

  return (
    <Form
      data={data}
      formName={data.title}
      schema={schema}
      inputProps={inputProps}
      selectOptions={selectOptions}
      handleSubmitData={handleSubmitData}
    />
  );
};

export default MovieForm;
