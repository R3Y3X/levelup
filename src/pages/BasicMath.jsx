import React from 'react';
import { Link } from 'react-router-dom';
export default function BasicMath() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Matemática Básica/Media y PAES</h2>
      <p className="mb-4">Aquí profundizaremos en todos los temas de matemáticas para enseñanza básica, media y preparación PAES.</p>
      <ul className="list-disc list-inside mb-6">
        <li>Aritmética</li>
        <li>Álgebra Lineal</li>
        <li>Geometría</li>
        <li>Funciones</li>
      </ul>
      <Link to="/" className="text-blue-600 hover:underline">
        ← Volver a el Inicio
      </Link>
    </div>
  );
}