import React from 'react';

import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/portfolio" element={<Portfolio />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
