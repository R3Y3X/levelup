// src/components/Timeline.jsx
import React from 'react';

const timelineEvents = [
    {
      date: '2021',
      title: 'Torneo Escolar de Matemáticas',
      description: 'Ganado en la Universidad Católica Silva Henríquez',
    },
    {
      date: '2021',
      title: 'Creación de videojuegos',
      description: 'Durante este periodo desarrollé varios videojuegos empleando la biblioteca Pygame de Python',
    },
    {
      date: '2021-2022',
      title: 'TRM (Taller de Razonamiento Matemático)',
      description: 'Organizado por la Pontificia Universidad Católica de Chile',
    },
    {
      date: '2022',
      title: 'Olimpiada Nacional de Matemática',
      description: 'Participación en la etapa final',
    },
    {
      date: '2023',
      title: 'Resultados PAES Matemática M1',
      description: 'Obtuve 1000 puntos en la sección de Matemática',
    },
    {
      date: '2023',
      title: 'Curso de Python',
      description: 'Dictado por MIT en colaboración con Universidad Mayor',
    },
    {
      date: '2024-2',
      title: 'Ayudante de Programación Avanzada',
      description: 'Asistencia en el curso de Programación Avanzada',
    },
    {
      date: '2024-2025',
      title: 'Desarrollador Trainee',
      description: 'Ayudante de desarrollo Trainee full-stack en el curso de Introducción a la Programación',
    },
  ];
  
/**
 * Componente Timeline: muestra eventos en una línea de tiempo vertical
 */
export default function Timeline() {
  return (
    <section id="timeline" className="py-12  bg-gray-800">
      <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">Mi Trayectoria</h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Línea vertical */}
        <div className="absolute left-4 top-0 w-1 bg-black h-full" />
        {/* Eventos */}
        <div className="space-y-12">
          {timelineEvents.map((event, idx) => (
            <div key={idx} className="flex items-start">
              {/* Punto de evento */}
              <div className="z-10 flex-shrink-0 place-self-center w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full relative"></div>
              <div className=" place-self-center border-t-2 border-dashed border-orange-500 w-5 md:w-10 my-4" />
              {/* Contenido del evento */}
              <div className="bg-gray-900 p-8 right-8 rounded-2xl shadow hover:shadow-lg transition border-2 border-orange-400">
                <time className="text-sm text-gray-500">{event.date}</time>
                <h3 className="text-2xl font-extrabold mb-4 text-gray-200">{event.title}</h3>
                <p className="mt-2 text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
