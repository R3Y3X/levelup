import React, { useState, useEffect } from 'react';
import MPButton from './MPButton';

// Preference IDs for each plan
const PLAN_LINKS = {
  '1': 'PREFERENCE_ID_1',   // Reemplaza con tu ID real
  '3': 'PREFERENCE_ID_3',
  '5': 'PREFERENCE_ID_5',
};

// Inicial availability: horas de 9 a 18, de lunes a viernes, todo disponible
const initAvailability = () => {
  const days = ['Lun','Mar','Mié','Jue','Vie'];
  const slots = {};
  days.forEach(day => {
    slots[day] = [];
    for (let h = 9; h <= 18; h++) {
      slots[day].push({ time: `${h}:00`, booked: false });
    }
  });
  return slots;
};

export default function BookingScheduler() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name:'', email:'', phone:'' });
  const [selected, setSelected] = useState({ day:null, time:null });
  const [plan, setPlan] = useState('1');
  const [availability, setAvailability] = useState(initAvailability);

  // handle input change
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const canProceedPersonal = form.name && form.email && form.phone;
  const canProceedSchedule = selected.day && selected.time;

  // Booking: mark slot booked when payment step confirms
  const handleBooking = () => {
    setAvailability(prev => ({
      ...prev,
      [selected.day]: prev[selected.day].map(s =>
        s.time === selected.time ? { ...s, booked: true } : s
      )
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-700 rounded-xl shadow-lg">
      {step === 1 && (
        <div>
          <h3 className="text-2xl mb-4 text-orange-600">1. Datos Personales</h3>
          <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange}
            className="w-full p-3 mb-4 border rounded" />
          <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange}
            className="w-full p-3 mb-4 border rounded" />
          <input name="phone" placeholder="Teléfono" type="tel" value={form.phone} onChange={handleChange}
            className="w-full p-3 mb-4 border rounded" />
          <button disabled={!canProceedPersonal} onClick={()=>setStep(2)}
            className="mt-2 px-6 py-2 bg-orange-600 text-white rounded disabled:opacity-50">
            Siguiente
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-2xl mb-4 text-orange-600">2. Selecciona Horario</h3>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th />
                  {Object.keys(availability).map(day => (
                    <th key={day} className="px-2 py-1 text-center">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {availability['Lun'].map((slot, i) => (
                  <tr key={i}>
                    <td className="px-2 py-1">{slot.time}</td>
                    {Object.keys(availability).map(day => {
                      const cell = availability[day][i];
                      return (
                        <td key={day+i} className="px-1 py-1 text-center">
                          <button
                            disabled={cell.booked}
                            onClick={() => { setSelected({ day, time: cell.time }); }}
                            className={`w-full py-1 rounded ${
                              selected.day===day && selected.time===cell.time
                                ? 'bg-orange-600 text-white'
                                : cell.booked
                                  ? 'bg-gray-400 cursor-not-allowed'
                                  : 'bg-gray-600 hover:bg-orange-500 hover:text-white'
                            }`}
                          >
                            {cell.booked ? 'X' : ''}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <button onClick={()=>setStep(1)} className="px-4 py-2 mr-4">Atrás</button>
            <button disabled={!canProceedSchedule} onClick={()=>setStep(3)}
              className="px-6 py-2 bg-orange-600 text-white rounded disabled:opacity-50">
              Siguiente
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-2xl mb-4 text-orange-600">3. Elige tu Plan y Paga</h3>
          <div className="flex space-x-4 mb-6">
            {['1','3','5'].map(p => (
              <button key={p} onClick={()=>setPlan(p)}
                className={`px-4 py-2 rounded-xl border-2 ${
                  plan===p ? 'border-orange-600 bg-orange-600 text-white' : 'border-gray-600'
                }`}>
                {p} Clase{p!=='1'?'s':''}
              </button>
            ))}
          </div>
          <div>
            <MPButton preferenceId={PLAN_LINKS[plan]} onApprove={handleBooking} />
          </div>
        </div>
      )}
    </div>
  );
}
