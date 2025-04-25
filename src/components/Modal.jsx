// src/components/Modal.jsx
import React from 'react';

/**
 * Modal: muestra un cuadro emergente sobre un overlay oscuro
 * Props:
 * - isOpen (boolean): controla visibilidad
 * - onClose (fn): función para cerrar modal
 * - title (string): título opcional del modal
 * - children: contenido dentro del modal
 */
export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay semitransparente */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      {/* Contenedor del modal */}
      <div className="relative z-10 bg-gray-800 rounded-lg shadow-xl max-w-lg w-full p-6">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
          aria-label="Cerrar modal"
        >
          ✕
        </button>
        {/* Título */}
        {title && (
          <h2 className="text-xl font-semibold mb-4 text-gray-100">
            {title}
          </h2>
        )}
        {/* Contenido */}
        <div className="space-y-2 text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}
