"use client"
import React, { useState } from 'react';
import axios from 'axios';

function PropiedadesForm() {
  const [propiedad, setPropiedad] = useState({
    nombre: "",
    direccion: "",
    caracteristicas: "",
    estado: "",
    precioalquiler: ""
  });

  const handleChange = (e) => {
    setPropiedad({
      ...propiedad,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/propiedades', propiedad);
    if (res.status === 200) {
      // Redirigir a la página de propiedades después de un registro exitoso
      location.href = "/propiedades";
    } else {
      alert("Error en el registro");
    }
  }

  return (
    <div className='m-8'>
      <h2 className="text-2xl font-extrabold text-gray-400 hover:text-gray-800">Propiedades</h2>
      <form onSubmit={handleSubmit} className='px-8 pt-6 pb-8 mb-4 rounded-md shadow-md bg-gray-50'>
        <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="nombre">
          Nombre
        </label>
        <input type="text" name="nombre" onChange={handleChange} className='bg-green-100 border border-green-300
             text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder="Nombre de la propiedad" />

        <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="direccion">
          Dirección
        </label>
        <input type="text" name="direccion" onChange={handleChange} className='bg-green-100 border border-green-300
             text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder="Dirección de la propiedad" />

        <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="caracteristicas">
          Características
        </label>
        <input type="text" name="caracteristicas" onChange={handleChange} className='bg-green-100 border border-green-300
             text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder="Características de la propiedad" />

        <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="estado">
          Estados
        </label>
        <input type="text" name="estado" onChange={handleChange} className='bg-green-100 border border-green-300
             text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder="Estados de la propiedad" />

        <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="precioalquiler">
          Precio de Alquiler
        </label>
        <input type="text" name="precioalquiler" onChange={handleChange} className='bg-green-100 border border-green-300
             text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder="Precio de alquiler de la propiedad" />

        <button className='bg-blue-500 hover:bg-blue-700 text-sm text-white 
          font-bold py-2 px-4 rounded mt-5'>
          Guardar</button>
      </form>
    </div>
  );
}

export default PropiedadesForm;