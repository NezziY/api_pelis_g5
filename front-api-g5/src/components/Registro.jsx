// Registro.js
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Registro() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3030/api/users", {
        username,
        email,
        password,
      });
      if (response.status === 201) {
        // Usuario registrado con éxito
        // redirigir al usuario a la página de inicio de sesión
        window.location.href = "/cuenta";
        // Limpiar los campos del formulario
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrorMessage("");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Error en el registro, intente de nuevo");
      }
    }
  };

  return (
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
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="*********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <p className="text-red-500 pb-5">{errorMessage}</p>
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
  );
}

export default Registro;
