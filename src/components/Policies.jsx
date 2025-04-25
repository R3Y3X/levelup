// src/components/Policies.jsx
import React from 'react';

/**
 * Componente Policies: muestra las políticas y condiciones de la promoción.
 */
export default function Policies({ validUntil }) {
  return (
    <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700 text-sm text-gray-300">
      <h3 className="font-semibold text-lg mb-2 text-gray-100">Políticas y Condiciones</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Válido solo para nuevos alumnos.</li>
        <li>Una sola clase al <strong>50&nbsp;%</strong> de descuento. No acumulable con otras ofertas.</li>
        <li>Reserva mínima con <strong>24&nbsp;h</strong> de anticipación. Cancela o reprograma con al menos <strong>12&nbsp;h</strong> de antelación sin costo.</li>
        <li>Pago no reembolsable si la cancelación es con menos de <strong>12&nbsp;h</strong> de anticipación.</li>
        <li>Oferta válida hasta <strong>{validUntil}</strong> o hasta agotar cupos de la promoción.</li>
        <li>Modalidad: aplica para clases <strong>presenciales u online</strong> (ambas incluidas).</li>
      </ul>
    </div>
  );
}

// Uso sugerido al final del formulario:
// import Policies from './components/Policies';
// <Policies validUntil="dd/mm/aaaa" />
