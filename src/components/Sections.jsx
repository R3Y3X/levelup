import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Matemática Básica/Media y PAES',
    path: 'basic-math',
    topics: ['Aritmética', 'Álgebra Lineal', 'Geometría', 'Funciones'],
  },
  {
    title: 'Cálculo',
    path: 'calculo',
    topics: ['Límites', 'Derivadas', 'Integración', 'Series'],
  },
  {
    title: 'Introducción a la Programación',
    path: 'intro-programming',
    topics: ['Variables y Tipos', 'Condicionales', 'Bucles', 'Funciones'],
  },
  {
    title: 'Programación Avanzada',
    path: 'advanced-programming',
    topics: ['Patrones de Diseño', 'Algoritmos', 'APIs REST', 'Testing'],
  },
];

export default function Sections() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid w-60 md:w-full place-self-center grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map(sec => (
          <Link
            to={`/secciones/${sec.path}`}
            key={sec.path}
            className="bg-gray-900 p-4 md:p-8 rounded-2xl shadow hover:shadow-lg transition border-2 border-orange-400"
          >
            <h3 className="text-xl font-bold mb-2 text-orange-400">{sec.title}</h3>
            <ul className="list-disc list-inside text-gray-300 text-justify leading-relaxed mb-6">
              {sec.topics.map(topic => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <span className="mt-4 inline-block text-orange-600 hover:underline">
              Más información →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
