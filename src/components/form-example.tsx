import React from 'react';

const EmailForm: React.FC = () => {
  return (
    <form action="https://formsubmit.co/tucorreo@ejemplo.com" method="POST">
      <input type="email" name="email" required placeholder="Tu correo electrónico" />
      <input type="hidden" name="_autoresponse" value="¡Gracias por registrarte! Te contactaremos pronto." />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default EmailForm;