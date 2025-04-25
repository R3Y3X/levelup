import React from 'react';
import { Link } from 'react-router-dom';
export default function Calculus() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Cálculo</h2>
      <p className="mb-4">Estudiaremos límites, derivadas, integrales y series.</p>
      <ul className="list-disc list-inside mb-6">
        <li>Límites</li>
        <li>Derivadas</li>
        <li>Integración</li>
        <li>Series</li>
      </ul>
      <Link to="/" className="text-blue-600 hover:underline">
        ← Volver a el Inicio
      </Link>
    </div>
  );
}