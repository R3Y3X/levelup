// src/components/MPButton.jsx
import { useEffect, useRef } from 'react';

export default function MPButton({ preferenceId }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Si ya hay un script con esta preferenceId, no hacemos nada
    if (
      container.querySelector(`script[data-preference-id="${preferenceId}"]`)
    ) {
      return;
    }

    const script = document.createElement('script');
    script.src =
      'https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js';
    script.setAttribute('data-preference-id', preferenceId);
    script.setAttribute('data-source', 'button');

    // Inyectamos el script una sola vez
    container.appendChild(script);
  }, [preferenceId]);

  return <div ref={containerRef} />;
}
