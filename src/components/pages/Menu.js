import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../firebase";
import Platillo from "../ui/Platillo";

export const Menu = () => {
  // -- Definir state -- //
  const { fb } = useContext(FirebaseContext);
  const [platillos, setPlatillos] = useState([]);

  // -- Obtener platillos -- //
  useEffect(() => {
    const obtenerPlatillos = () => {
      fb.db.collection("productos").onSnapshot(handleSnapshot);
    };
    obtenerPlatillos();
  }, [fb.db]);

  // -- Snapshot permite obtener los datos de la coleccion en tiempo real -- //
  const handleSnapshot = (snapshot) => {
    const platillos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    console.log(platillos);
    setPlatillos(platillos);
  };

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Menu</h1>
      <Link
        to="/nuevo-platillo"
        className="bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold"
      >
        Agregar Platillo
      </Link>
      {platillos.map((platillo) => (
        <Platillo key={platillo.id} platillo={platillo} />
      ))}
    </>
  );
};
