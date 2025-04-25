import React from 'react';
import { Link } from 'react-router-dom';
export default function AdvancedProgramming() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Programación Avanzada</h2>
      <p className="mb-4">Profundizaremos en conceptos avanzados y buenas prácticas.</p>
      <ul className="list-disc list-inside mb-6">
        <li>Patrones de Diseño</li>
        <li>Algoritmos</li>
        <li>APIs REST</li>
        <li>Testing</li>
      </ul>
      <Link to="/" className="text-blue-600 hover:underline">
        ← Volver a el Inicio
      </Link>
    </div>
  );
}