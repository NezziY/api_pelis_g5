import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=01dc16d34072a01701da97a3c19d2417&language=es-MX&page=${page}`
      )
      .then((response) => {
        setMovies(response.data.results);
        setTotalPages(Math.ceil(response.data.total_results / 9)); // Asumiendo 9 películas por página
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [page]);

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lo último en Películas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default Movies;
