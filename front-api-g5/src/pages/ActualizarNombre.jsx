import { useState } from "react";
import axios from "axios";

function ActualizarNombre() {
  const [newUsername, setNewUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = JSON.parse(sessionStorage.getItem("user")).userId; // Asegúrate de tener el userId almacenado en sessionStorage
      const response = await axios.put(
        `http://localhost:3030/api/users/${userId}`,
        {
          username: newUsername,
        }
      );
      console.log(response.data); // Maneja la respuesta como sea necesario
      // Puedes redirigir o mostrar un mensaje de éxito
    } catch (error) {
      console.error("Error al actualizar el nombre:", error);
      setError("Error al actualizar el nombre. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <div>
      <h2>Actualizar Nombre de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          placeholder="Nuevo nombre de usuario"
          required
        />
        <button type="submit">Actualizar Nombre</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default ActualizarNombre;
