import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde React Router

const MovieCard = ({ movie }) => {
  // Función para manejar el clic en la tarjeta de película
  const handleClick = () => {
    // Aquí podrías navegar a la ruta de detalles de la película
    console.log(`Navegar a detalles de la película ${movie.id}`);
  };

  return (
    <Link to={`/movies/${movie.id}`} className="cursor-pointer"> {/* Enlace a la ruta de detalles de la película */}
      <div className="p-4 flex flex-col justify-end h-full" onClick={handleClick}>
        <div className="flex-grow">
          <div className="h-64 w-full overflow-hidden rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h3 className="text-center text-lg font-bold mt-2 pb-0">{movie.title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
