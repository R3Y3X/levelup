import React from 'react';
import { Link } from 'react-router-dom';
export default function IntroProgramming() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Introducción a la Programación</h2>
      <p className="mb-4">Aprender los fundamentos básicos de la programación.</p>
      <ul className="list-disc list-inside mb-6">
        <li>Variables y Tipos</li>
        <li>Condicionales</li>
        <li>Bucles</li>
        <li>Funciones</li>
      </ul>
      <Link to="/" className="text-blue-600 hover:underline">
        ← Volver a el Inicio
      </Link>
    </div>
  );
}