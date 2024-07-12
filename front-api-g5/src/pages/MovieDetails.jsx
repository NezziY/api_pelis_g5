import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Reviews from "../components/Reviews"; // Importa el componente Reviews

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const userId = "01";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=01dc16d34072a01701da97a3c19d2417&language=es-MX`
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <Link to={`/movies/`} className="text-blue-500 underline">
        volver
      </Link>
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
<<<<<<< HEAD:front-api-g5/src/pages/MoviesDetails.jsx
        className="rounded-lg w-full h-full object-cover"
      />
      <p>{movie.overview}</p>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Rating:</strong> {movie.vote_average}
      </p>
=======
        className="rounded-lg"
        style={{ minHeight: "300px", maxHeight: "300px" }}
      />
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>

      {/* Agrega el componente Reviews con movieId como prop */}
      <Reviews movieId={movie.id} userId={userId} />
>>>>>>> vane:front-api-g5/src/pages/MovieDetails.jsx
    </div>
  );
};

export default MovieDetails;
