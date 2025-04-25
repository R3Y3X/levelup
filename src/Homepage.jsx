import React, { useState } from 'react';
import TypingTitle from './components/TypingTitle';
import Sections from './components/Sections';
import Timeline from './components/Timeline';
import MPButton from './components/MPButton';
import { useDarkMode } from './hooks/useDarkMode';
import BookingScheduler from './components/BookingScheduler';
import ReservaSection from './components/ReservaSection';
import Contact from './components/Contact';
const phones = import.meta.env.VITE_WHATSAPP_NUMBER;

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [theme, setTheme] = useDarkMode();

  const handleTimeSlotChange = e => {
    const { value, checked } = e.target;
    setTimeSlots(prev =>
      checked ? [...prev, value] : prev.filter(slot => slot !== value)
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = selectedDate ? selectedDate.toLocaleDateString() : '';
    const slots = timeSlots.join(', ');
    const message = encodeURIComponent(
      `Hola Luis, soy ${name}. Me interesa reservar una clase el ${date} en horario(s): ${slots}. Mi email es ${email} y mi teléfono ${phone}.`
    );
    window.location.href = `https://api.whatsapp.com/send?phone=${phones}&text=${message}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 transition-colors overflow-x-hidden">
      {/* Header */}
      <header className="backdrop-blur-lg bg-gray-800/20 border-b-2 border-orange-400 px-8 py-4">
        <div className="max-w-6xl mx-auto md:flex items-center justify-between">
          <TypingTitle
            text="R\3Y3X Classroom"
            speed={120}
            className=" text-2xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-orange-500"
          />
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
            {['secciones','planes','quien soy'].map(id => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-gray-200 hover:text-orange-500 transition"
                >
                  {id === 'pedirclase' ? 'Pedir Clase' : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
            <li><a className="text-gray-200 hover:text-orange-500 transition" href='/pedirclase'>Pedir Clase</a></li>
          </ul>
        </div>
      </header>

      {/* Promoción */}
      <section
        className="py-20 text-center bg-gradient-to-r from-orange-400 to-orange-600  text-white ring-2 ring-orange-400 shadow-[0_0_25px_rgba(255,94,0,0.5)]"
      >
        <h2 className="text-4xl font-bold mb-4 uppercase tracking-wider text-white">
          Promoción Especial
        </h2>
        <p className="max-w-2xl p-4 mx-auto text-m md:text-lg text-justify leading-relaxed">
        Aprovecha tu primera clase con un 50 % de descuento
Solo tienes que llenar el <a href='#descuento' className="text-black after:content-['_↗']"><strong>formulario</strong></a> y escribirme por WhatsApp.
Te enviaré un enlace con el descuento para que reserves tu hora.    
        </p>
      </section>


      {/* Visión */}
      <section id="vision" className="py-20 px-6 bg-gray-900 transition-colors">
        <div className="max-w-4xl mx-auto p-8 ring-2 ring-orange-400 shadow-[rgba(255,94,0,0.5)]  rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(255,94,0,0.5)] transition-transform">
          <h2 className="text-3xl font-semibold text-center mb-6 text-orange-400">
            Visión
          </h2>
          <p className="text-gray-200 text-justify leading-relaxed">
            Mi objetivo con este proyecto es crear un espacio de aprendizaje práctico
y cercano, donde cada alumno encuentre un acompañamiento personalizado.
Creo en un enfoque basado en proyectos reales, retroalimentación
constante y desarrollo de habilidades transferibles al mundo profesional.
Quiero que mis clases no solo transmitan conceptos, sino que inspiren
curiosidad, fomenten el trabajo en equipo e impulsen a las
personas a desarrollar sus propias ideas.
          </p>
        </div>
      </section>

      {/* Secciones */}
      <section id="secciones" className="py-20
    relative
    bg-[url('/assets/endless-clouds.svg')]  /* background SVG */
    bg-repeat                          /* repetir patrón */
    bg-center                          /* centrar cada tile */
    bg-opacity-20                      /* opacidad global del fondo */
    p-16
  ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
            Secciones
          </h2>
          <Sections />
        </div>
      </section>
      {/* Planes */}
      <section id="planes" className="py-20 bg-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
            Planes Disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '1 Clase', price: '$30.000 CLP', desc: 'Ideal para resolver dudas puntuales.', dis: '20.000 CLP' },
              { title: '3 Clases', price: '$80.000 CLP', desc: 'Pack intensivo para avanzar rápido.', dis: '50.000 CLP' },
              { title: '5 Clases', price: '$120.000 CLP', desc: 'La opción más completa para dominar conceptos.',dis: '80.000 CLP' }
            ].map((plan,i) => (
              <div
                key={i}
                className="bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition border-2 border-orange-400"
              >
                <h3 className="text-xl font-bold mb-2 text-orange-400">
                  {plan.title}
                </h3>
                <div className='flex gap-2 items-down'>
                  <p className="text-3xl font-extrabold mb-4 text-gray-200">
                  {plan.dis}
                  </p>
                  <p className="text-l font-extrabold mb-4 text-gray-200 line-through self-end">
                  {plan.price}
                  </p>
                </div>
                
                <p className="text-gray-300 text-justify leading-relaxed mb-6">
                  {plan.desc}
                </p>
                {plan.id && (
                  <MPButton preferenceId={plan.id} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h4 className="text-xl font-semibold mb-4 text-gray-100">
              Clases Compartidas
            </h4>
            <p className="max-w-2xl mx-auto text-gray-300 text-justify leading-relaxed">
              ¿Prefieres un grupo? Precio reducido por estudiante y mayor flexibilidad
de horarios en un espacio colaborativo.
            </p>
          </div>
        </div>
      </section>

      {/* Formulario de Reserva */}
      <section id="descuento" className="py-20 bg-gradient-to-t from-gray-800 to-gray-900 transition-colors">
        <div className="max-w-lg mx-auto w-full px-6 rounded-2xl border-2 p-6 border-orange-500 ring-orange-500 bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">
            Reservar tu Clase
          </h2>
            <ul className="list-disc list-inside text-gray-300 text-justify leading-relaxed mb-6">
              <li>Completa tus datos (nombre, email, teléfono, horario) en el formulario.</li>
              <li>Se abrirá tu WhatsApp con un mensaje pre-llenado para enviarme tu solicitud.</li>
              <li>Te responderé con un link de pago que incluye el 50 % off en tu primera clase.</li>
            </ul>
          <ReservaSection></ReservaSection>
          <form className="space-y-6 pt-5" onSubmit={handleSubmit}>
            {['Nombre','Correo Electrónico','Número de Teléfono'].map((placeholder,i) => (
              <input
                key={i}
                type={i===1?'email':i===2?'tel':'text'}
                name={['name','email','phone'][i]}
                placeholder={placeholder}
                className=" text-gray-200 w-full p-4 border-2 border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
              />
            ))}
            <div className="grid grid-cols-2 gap-4">
              {['10:00','12:00','14:00','16:00'].map(slot => (
                <label key={slot} className="flex items-center space-x-2">
                  <input type="checkbox" value={slot} onChange={handleTimeSlotChange} className="w-5 h-5 accent-orange-500" />
                  <span className="text-gray-200">{slot}</span>
                </label>
              ))}
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-orange-400 to-orange-500  text-white font-semibold rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(255,94,0,0.6)] transition"
            >
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* ¿Quién Soy? */}
      <section id="quien soy" className="py-20 bg-gray-800 transition-colors">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">
            ¿Quién Soy?
          </h2>
          
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          
            <img src='/assets/profilepic.png'  alt="Descripción de la imagen"
        className="w-32 h-32 rounded-full "/>
            <p className="text-gray-200 text-justify leading-relaxed p-2 md:p-4 border-l-2 border-orange-600 h-auto">
              Soy Luis Reyes, estudiante de tercer año de Ingeniería Civil Industrial en
              Computación en la Pontificia Universidad Católica de Chile. Me apasiona la tecnología
              y el aprendizaje colaborativo, por lo que disfruto compartir mis conocimientos para
              que otros desarrollen su máximo potencial. A lo largo de mi formación he llevado a cabo
              diversos proyectos de programación y he participado en talleres y competencias estudiantiles
              que me han permitido crecer tanto técnica como personalmente.
            </p>
          </div>
          <div className="mt-12 bg-gray-800">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
          <Contact></Contact>
        <div className="bg-gray-950 text-gray-200 text-center py-8">
          <p>© {new Date().getFullYear()} Luis Reyes. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
