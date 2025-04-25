import React, { useState } from 'react';

const sections = [
  { value: 'basic-math', label: 'Matemática Básica/Media y PAES' },
  { value: 'calculo', label: 'Cálculo' },
  { value: 'intro-programming', label: 'Introducción a la Programación' },
  { value: 'advanced-programming', label: 'Programación Avanzada' },
];

export default function BookingForm({ initialData, onSubmit }) {
  const [data, setData] = useState(initialData);

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-700 p-6 rounded-lg shadow-lg space-y-4">
      {['name','email','phone'].map((field, i) => (
        <input
          key={field}
          type={field==='email'?'email': field==='phone'?'tel':'text'}
          name={field}
          placeholder={field.charAt(0).toUpperCase()+field.slice(1)}
          value={data[field]}
          onChange={handleChange}
          required
          className="w-full p-3 border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
        />
      ))}
      <select
        name="section"
        value={data.section}
        onChange={handleChange}
        required
        className="w-full p-3 border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
      >
        <option value="" disabled>Selecciona sección</option>
        {sections.map(sec => <option key={sec.value} value={sec.value}>{sec.label}</option>)}
      </select>
      <select
        name="plan"
        value={data.plan}
        onChange={handleChange}
        className="w-full p-3 border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
      >
        <option value="1">1 Clase</option>
        <option value="3">3 Clases</option>
        <option value="5">5 Clases</option>
      </select>
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(255,94,0,0.6)] transition"
      >
        Siguiente
      </button>
    </form>
  );
}