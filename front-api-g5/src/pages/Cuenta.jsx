import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PiEyeClosedLight, PiEyeLight } from "react-icons/pi";

function Cuenta() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const fetchApi = async () => {
    try {
      const response = await axios.get("http://localhost:3030/api/users", {
        email,
        password,
      });
      console.log(response.data);
      //si es correcto dar mensaje de bienvenida al nombre que se conecta
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi();
  };
  const handleSwapClick = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <>
      <div className="ml-auto mr-auto mt-7 w-96 rounded-lg shadow-lg p-5 bg-gray-800 text-white">
        <h2 className="text-2xl font-bold pb-5">Iniciar sesión</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Tu email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="tuemail@mail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-4">
            <div className="form-control block mb-2 text-sm font-medium">
              <label className="label">
                <span className="label-text text-white">Contraseña</span>
              </label>
              <label className="swap swap-rotate absolute ml-72 mt-2 focus:outline-none">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  onChange={handleSwapClick}
                  tabIndex="-1"
                />

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
                // value={palabraMagica}
                // onChange={handleInputChange}
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

          <div>
            <p className="text-red-500 pb-5"></p>
          </div>
          <div className="flex flex-col items-center justify-between mb-4">
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full"
            >
              Conectarse
            </button>
            <div className="flex items-center text-sm mt-3">
              <p>Quieres crear una cuenta?</p>
              <Link to={`/registro/`} className="underline cursor-pointer ml-1">
                Registrarse
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cuenta;
