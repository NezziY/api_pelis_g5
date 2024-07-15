import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PiEyeClosedLight, PiEyeLight } from "react-icons/pi";

function Cuenta() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3030/api/login", {
        email,
        password,
      });

      if (response.data.success) {
        // Guardar solo los datos relevantes del usuario en sessionStorage
        const userData = {
          username: response.data.user.username,
          email: response.data.user.email,
          // Agregar otros campos si es necesario
        };
        sessionStorage.setItem("user", JSON.stringify(userData));
        window.location.href = "/conected"; // Redirigir al usuario después del inicio de sesión
      } else {
        setError(response.data.message); // Mostrar mensaje de error del servidor
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Error al iniciar sesión. Por favor, inténtelo de nuevo.");
    }
  };

  const handleSwapClick = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <div className="ml-auto mr-auto mt-7 w-96 rounded-lg shadow-lg p-5 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold pb-5">Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Tu email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="tuemail@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <div className="form-control block mb-2 text-sm font-medium">
            <label className="label">
              <span className="label-text text-white">Contraseña</span>
            </label>
            <label className="swap swap-rotate absolute ml-72 mt-2 focus:outline-none">
              <input type="checkbox" onChange={handleSwapClick} tabIndex="-1" />
              <div className="swap-off  text-2xl text-black">
                <PiEyeClosedLight />
              </div>
              <div className="swap-on text-2xl text-black">
                <PiEyeLight />
              </div>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="label mt-2">
              <Link
                to="/recuperar"
                className="label-text-alt link link-hover text-sm text-white"
              >
                Recuperar contraseña
              </Link>
            </label>
          </div>
        </div>

        {error && <p className="text-red-500 pb-5">{error}</p>}

        <div className="flex flex-col items-center justify-between mb-4">
          <button
            type="submit"
            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full"
          >
            Conectarse
          </button>
          <div className="flex items-center text-sm mt-3">
            <p>¿Quieres crear una cuenta?</p>
            <Link to={`/registro/`} className="underline cursor-pointer ml-1">
              Registrarse
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cuenta;
