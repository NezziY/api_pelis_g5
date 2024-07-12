import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Registro() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    // Preparar datos para enviar
    const userData = {
      username: username,
      email: email,
      password: password,
    };

    try {
      // Enviar datos a la API
      const response = await axios.post(
        "http://localhost:3030/api/users",
        userData
      );

      if (response.status === 201) {
        // Registro exitoso
        alert("Usuario registrado con éxito");
        // Redirigir o limpiar formulario
      } else {
        setErrorMessage("Error en el registro, intente de nuevo");
      }
    } catch (error) {
      // Mostrar error específico del servidor si está disponible
      setErrorMessage(
        error.response?.data?.message ||
          "Error en el registro, intente de nuevo"
      );
    }
  };

  return (
    <>
      <div className="mt-7 ml-auto mr-auto w-96 rounded-lg shadow-lg p-5 bg-gray-800 text-white">
        <h2 className="text-2xl font-bold pb-5">Registrarse</h2>
        <form id="formRegistro" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nombreUser"
              className="block mb-2 text-sm font-medium"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombreUser"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="Nombre"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="ejemplo@tumail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmarPassword"
              className="block mb-2 text-sm font-medium"
            >
              Repite tu contraseña
            </label>
            <input
              type="password"
              id="confirmarPassword"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="*********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div>
            {errorMessage && (
              <p className="text-red-500 pb-5">{errorMessage}</p>
            )}
          </div>
          <div className="flex flex-col items-center justify-between mb-4">
            <button
              type="submit"
              id="btnRegistro"
              name="btnRegistro"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full"
            >
              Registrarme
            </button>
            <div className="flex items-center text-sm mt-3">
              <p>Ya tienes una cuenta?</p>
              <Link to={`/cuenta`} className="underline cursor-pointer ml-1">
                Iniciar sesión
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div id="mensajeError" className="hidden"></div>
    </>
  );
}

export default Registro;
