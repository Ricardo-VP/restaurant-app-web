import React, { useContext, useRef } from "react";
import { FirebaseContext } from "../../firebase";

const Platillo = ({ platillo }) => {
  // -- Uso de useRef para obtener el elemento del DOM -- //
  const existenciaRef = useRef(platillo.existencia);

  // -- Context de firebase -- //
  const { fb } = useContext(FirebaseContext);

  const { id, nombre, imagen, existencia, categoria, precio, descripcion } =
    platillo;

  // -- Modificar el estado de existencia -- //
  const actualizarDisponibilidad = () => {
    const existencia = existenciaRef.current.value === "true";
    console.log(existencia);
    try {
      fb.db.collection("productos").doc(id).update({
        existencia,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full px-3 mb-4">
      <div className="p-5 shadow-md bg-white">
        <div className="lg:flex">
          <div className="lg:w-5/12 xl:w-3/12">
            <img src={imagen} alt={"Imagen Platillo"} />

            <div className="sm:flex sm:-mx-2">
              <label className="block mt-5 sm:w-2/4">
                <span className="block text-gray-800 mb-2">Existencia</span>
              </label>
              <br />
              <select
                value={existencia}
                ref={existenciaRef}
                onChange={() => {
                  actualizarDisponibilidad();
                }}
                className="mt-5 bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="true">Disponible</option>
                <option value="false">No disponible</option>
              </select>
            </div>
          </div>
          <div className="lg:w-7/12 xl:w-9/12 pl-5">
            <p className="font-bold text-2xl text-yellow-600 mb-4">{nombre}</p>
            <p className="text-gray-600 mb-4">
              Categoria:{" "}
              <span className="text-gray-700 font-bold">
                {categoria.toUpperCase()}
              </span>
            </p>
            <p className="text-gray-600 mb-4">{descripcion}</p>
            <p className="text-gray-600 mb-4">
              Precio:{" "}
              <span className="text-gray-700 font-bold">{"$" + precio}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platillo;
