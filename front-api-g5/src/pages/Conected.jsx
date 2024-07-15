import { useEffect, useState } from "react";

function Conected() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Recuperar datos del usuario desde sessionStorage
    const userString = sessionStorage.getItem("user");
    if (userString) {
      try {
        const user = JSON.parse(userString);
        setUserData(user);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);
  //funcion para cerrar la sesión y borrar el sesion storage
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    window.location.href = "/cuenta";
  };
  return (
    <div className="ml-auto mr-auto mt-7 w-96 rounded-lg shadow-lg p-5 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold pb-5">Usuario Conectado</h2>
      {userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          {/* Otros datos del usuario si es necesario */}
        </div>
      ) : (
        //boton para cerrar la sesión y limpiar el localstorage

        <p>Cargando datos de usuario...</p>
      )}
      <button
        onClick={handleLogout}
        className="mt-10 text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Conected;
