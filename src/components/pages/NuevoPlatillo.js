import React from "react";

export const NuevoPlatillo = () => {
  return (
    <>
      <div className="text-3xl font-light mb-4">Agregar platillo</div>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form>
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nombre Platillo"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="precio"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Precio
              </label>
              <input
                id="nombre"
                type="number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="$2"
                min="0"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="categoria"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Categoria
              </label>
              <select
                id="categoria"
                name="categoria"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">-- Seleccione --</option>
                <option value="desayuno">Desayuno</option>
                <option value="comida">Comida</option>
                <option value="cena">Cena</option>
                <option value="bebida">Bebida</option>
                <option value="postre">Postre</option>
                <option value="ensalada">Ensalada</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="imagen"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Imagen
              </label>
              <input
                id="imagen"
                type="file"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="descripcion"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Descripción
              </label>
              <textarea
                id="descripcion"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                placeholder="Descripción del Platillo"
              ></textarea>
            </div>

            <input
              type="submit"
              value="Agregar Platillo"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
            />
          </form>
        </div>
      </div>
    </>
  );
};
