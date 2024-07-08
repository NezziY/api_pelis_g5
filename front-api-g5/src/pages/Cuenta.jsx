import { Link } from "react-router-dom";

function Cuenta() {
  return (
    <>
      <div className="ml-auto mr-auto mt-7 w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
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
              placeholder="andrew@mail.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Tu contraseña
            </label>
            <input
              type="password"
              id="password"
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
