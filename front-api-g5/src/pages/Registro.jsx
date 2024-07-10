import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Registro() {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const { nombre, apellido, email, password, confirmarPassword } = datos;

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.id]: e.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();

    const datosUsuario = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      password: password,
      confirmarPassword: confirmarPassword,
    };
    console.log(datosUsuario);
    axios
      .post("http://localhost:5000/registro", datosUsuario)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="mt-7 ml-auto mr-auto w-96 rounded-lg shadow-lg p-5 bg-gray-800 text-white">
        <h2 className="text-2xl font-bold pb-5">Registrarse</h2>
        <form id="formRegistro" onSubmit={enviarDatos}>
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
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="apellidoUser"
              className="block mb-2 text-sm font-medium"
            >
              Apellido
            </label>
            <input
              type="text"
              id="apellidoUser"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="Apellido"
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="ejemplo@tumail.com"
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
              onChange={handleInputChange}
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="*********"
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
              onChange={handleInputChange}
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="*********"
              required
            />
          </div>
          <div>
            <p className="text-red-500 pb-5"></p>
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
      {/* mensajes de error  */}
      <div id="mensajeError" className="hidden"></div>
    </>
  );
}

export default Registro;
