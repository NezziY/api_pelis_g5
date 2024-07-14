import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Reviews from "../components/Reviews"; // Asegúrate de importar Reviews correctamente

const SeriesDetails = () => {
  const { id } = useParams();
  const [series, setSeries] = useState(null);
  const [userId, setUserId] = useState(null); // Estado para almacenar el userId

  useEffect(() => {
    // Simulación de obtención de userId (puedes adaptarlo según tu lógica de autenticación)
    const fetchUserId = async () => {
      // Aquí se asume que estás obteniendo el userId de algún lugar, como localStorage o mediante autenticación
      const userIdFromSomewhere = "1"; // Ejemplo, puedes cambiar según tu lógica
      setUserId(userIdFromSomewhere);
    };

    fetchUserId();

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
        Volver
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

      {/* Pasar userId y series.id a Reviews */}
      <Reviews seriesId={series.id}  userId={userId} />
    </div>
  );
};

export default SeriesDetails;
