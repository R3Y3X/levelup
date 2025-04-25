/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',             // ← aquí activas el modo “clase”
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: { extend: {} },
    plugins: [],
  };
  