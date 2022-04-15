import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FirebaseContext } from "../../firebase";
import { useNavigate } from "react-router";

export const NuevoPlatillo = () => {
  // -- Context de firebase -- //
  const { fb } = useContext(FirebaseContext);

  // -- React router -- //
  const navigate = useNavigate();

  // -- Validacion y leer datos del formulario -- //
  const formik = useFormik({
    initialValues: {
      nombre: "",
      precio: "",
      categoria: "",
      imagen: "",
      descripcion: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, "El nombre es muy corto")
        .required("El nombre es obligatorio"),
      precio: Yup.number()
        .min(0.25, "Debes agregar un numero")
        .required("El precio es obligatorio"),
      categoria: Yup.string().required(
        "La categoria del platillo es obligatorio"
      ),
      descripcion: Yup.string()
        .min(10, "La descripción es muy corto")
        .required("La descripción es obligatorio"),
    }),
    onSubmit: (platillo) => {
      try {
        platillo.existencia = true;
        fb.db.collection("productos").add(platillo);
        // -- Redireccionar a la pagina de ordenes -- //
        navigate("/ordenes");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="text-3xl font-light mb-4">Agregar platillo</div>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form onSubmit={formik.handleSubmit}>
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
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.nombre && formik.errors.nombre ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
                role="alert"
              >
                <p className="font-bold">Hubo un error!</p>
                <p>{formik.errors.nombre}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                htmlFor="precio"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Precio
              </label>
              <input
                id="precio"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="2.5"
                min="0"
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.precio && formik.errors.precio ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
                role="alert"
              >
                <p className="font-bold">Hubo un error!</p>
                <p>{formik.errors.precio}</p>
              </div>
            ) : null}

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
                value={formik.values.categoria}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
            {formik.touched.categoria && formik.errors.categoria ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
                role="alert"
              >
                <p className="font-bold">Hubo un error!</p>
                <p>{formik.errors.categoria}</p>
              </div>
            ) : null}

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
                value={formik.values.imagen}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            {formik.touched.descripcion && formik.errors.descripcion ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
                role="alert"
              >
                <p className="font-bold">Hubo un error!</p>
                <p>{formik.errors.descripcion}</p>
              </div>
            ) : null}

            <input
              type="submit"
              value="Agregar Platillo"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};
