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
        <p>Cargando datos de usuario...</p>
      )}
    </div>
  );
}

export default Conected;
