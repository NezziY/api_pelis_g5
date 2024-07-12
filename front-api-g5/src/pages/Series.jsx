import React, { useEffect, useState } from "react";
import axios from "axios";
import SeriesCard from "../components/SeriesCard";
import ReactPaginate from "react-paginate";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://www.episodate.com/api/most-popular?page=${page}`
      )
      .then((response) => {
        setSeries(response.data.tv_shows);
        setTotalPages(Math.ceil(response.data.total / 9)); // Asumiendo 9 series por página
      })
      .catch((error) => {
        console.error("Error fetching series:", error);
      });
  }, [page]);

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Series Populares</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {series.map((show) => (
          <SeriesCard key={show.id} show={show} />
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

export default Series;