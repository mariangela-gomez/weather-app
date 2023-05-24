import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import Clima from './components/Clima';
import Nosotras from './components/Nosotras';
import Contacto from './components/Contacto';
import './components/Styles/landingpage.css'

function App() {
  return (
    <Router>
      <div className="App">
     
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/clima" element={<Clima />} />
          <Route path="/nosotras" element={<Nosotras />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


