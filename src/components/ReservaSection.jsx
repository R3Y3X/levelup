import React, { useState } from 'react';
import Modal from './Modal';
import Policies from './Policies';

export default function ReservaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mt-6">
      {/* ...tu formulario aquí... */}

      {/* Enlace para abrir modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-sm text-orange-400 underline hover:text-orange-800 transition"
      >
        Ver Políticas y Condiciones
      </button>

      {/* Modal emergente */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Términos y Condiciones"
      >
        <Policies validUntil="30/06/2025" />
      </Modal>
    </div>
  );
}
