import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import Home from './Routes/Home.jsx';
import Contact from './Routes/Contact.jsx';
import Skills from './Routes/Skills.jsx';
import Projects from './Routes/Projects.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/habilidades" element={<Skills />} />
          <Route path="/projetos" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
