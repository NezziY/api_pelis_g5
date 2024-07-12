import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const SeriesDetails = () => {
  const { id } = useParams();
  const [series, setSeries] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.episodate.com/api/show-details?q=${id}`)
      .then((response) => {
        setSeries(response.data.tvShow);
      })
      .catch((error) => {
        console.error("Error fetching series details:", error);
      });
  }, [id]);

  if (!series) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <Link to={`/series/`} className="text-blue-500 underline">
        volver
      </Link>
      <h1 className="text-2xl font-bold mb-4">{series.name}</h1>
      <img
        src={series.image_thumbnail_path}
        alt={series.name}
        className="rounded-lg mb-4"
      />
      <p>
        <strong>Start Date:</strong> {series.start_date}
      </p>
      <p>
        <strong>End Date:</strong> {series.end_date}
      </p>
      <p>
        <strong>Country:</strong> {series.country}
      </p>
      <p>
        <strong>Network:</strong> {series.network}
      </p>
      <p>
        <strong>Status:</strong> {series.status}
      </p>
      <p>{series.description}</p>
    </div>
  );
};

export default SeriesDetails;
