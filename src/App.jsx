import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Homepage';
import Sections from './components/Sections';
import BasicMath from './pages/BasicMath';
import Calculus from './pages/Calculus';
import IntroProgramming from './pages/IntroProgramming';
import AdvancedProgramming from './pages/AdvancedProgramming';
import BookingPage from './pages/BookingPage';
  

export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/secciones" element={<Sections />} />
          <Route path="/secciones/basic-math" element={<BasicMath />} />
          <Route path="/secciones/calculo" element={<Calculus />} />
          <Route path="/secciones/intro-programming" element={<IntroProgramming />} />
          <Route path="/secciones/advanced-programming" element={<AdvancedProgramming />} />
          <Route path='/pedirclase' element={<BookingPage></BookingPage>}></Route>
          {/* Redirigir cualquier ruta desconocida al home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    );
  }