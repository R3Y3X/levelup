import enUS from 'date-fns/locale/en-US';

import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
/*import CalendarScheduler from '../components/CalendarScheduler';*/
import MPButton from '../components/MPButton';
import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// 2) Crea el localizer usando la localización importada
const locales = { 'en-US': enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

// Eventos de prueba
const dummyEvents = [
  {
    title: 'Bloque ocupado',
    start: new Date(2025, 5, 3, 10, 0),  // 3 de junio 2025, 10:00
    end:   new Date(2025, 5, 3, 11, 0),
  },
  {
    title: 'Clase compartida',
    start: new Date(2025, 5, 5, 14, 0),
    end:   new Date(2025, 5, 5, 15, 0),
  },
];

export default function BookingPage() {
  // Step control: 1=Form, 2=Calendar, 3=Confirm
  const [step, setStep] = useState(1);
  
  // events sería tu array de busyIntervals mapeado a { start, end, title }
  /*const events = busyIntervals.map(b => ({
    title: 'Ocupado',
    start: new Date(b.start),
    end:   new Date(b.end),
  }));*/

  // Form data
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', section: '', plan: '1',
  });
  
  // Selected slots: [{ date: '2025-06-01', time: '10:00' }, ...]
  const [selectedSlots, setSelectedSlots] = useState([]);
  
  // Max slots based on plan
  const maxSlots = parseInt(formData.plan, 10);
  
  // Handlers
  const handleFormSubmit = data => {
    setFormData(data);
    setStep(2);
  };

  const handleCalendarSubmit = slots => {
    setSelectedSlots(slots);
    setStep(3);
  };
  
  const handlePaymentApprove = () => {
    // Here you could send booking to backend and mark slots
    console.log('Booking confirmed:', { formData, selectedSlots });
  };
  
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-100 mb-6">
        Solicitar Clase
      </h1>

      {step === 1 && (
        <BookingForm
          initialData={formData}
          onSubmit={handleFormSubmit}
        />
      )}

      {step === 2 && (
        <CalendarScheduler
          year={2025}
          month={6}  // Junio
          maxSelections={maxSlots}
          onBack={() => setStep(1)}
          onSubmit={handleCalendarSubmit}
        />
      )}

      {step === 3 && (
        <div className="max-w-md mx-auto bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-100">
            Confirmar Reserva
          </h2>
          <p className="text-gray-300 mb-2"><strong>Nombre:</strong> {formData.name}</p>
          <p className="text-gray-300 mb-2"><strong>Email:</strong> {formData.email}</p>
          <p className="text-gray-300 mb-2"><strong>Teléfono:</strong> {formData.phone}</p>
          <p className="text-gray-300 mb-2"><strong>Sección:</strong> {formData.section}</p>
          <p className="text-gray-300 mb-2"><strong>Plan:</strong> {formData.plan} clase{formData.plan!=='1'?'s':''}</p>
          <div className="text-gray-300 mb-4">
            <strong>Horarios seleccionados:</strong>
            <ul className="list-disc list-inside">
              {selectedSlots.map((s, i) => (
                <li key={i}>{s.date} - {s.time}</li>
              ))}
            </ul>
          </div>
          <MPButton preferenceId={formData.plan === '1' ? 'PREF_ID_1' : formData.plan === '3' ? 'PREF_ID_3' : 'PREF_ID_5'} onApprove={handlePaymentApprove} />
        </div>
      )}
      <Calendar
        localizer={localizer}
        defaultView={Views.WEEK}
        events={dummyEvents.map(b=>({
          title: 'Ocupado',
          start: new Date(b.start),
          end: new Date(b.end)
        }))}
        selectable
        onSelectSlot={slotInfo => {
          // slotInfo.start, slotInfo.end
          console.log('Seleccionaste:', slot.start, slot.end);
        }}
        style={{ height: 600 }}
      />
    </div>
  );
}