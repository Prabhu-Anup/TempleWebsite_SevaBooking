import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Loader from './components/Loader';
import Administration from './pages/Administration';
import Seva from './pages/Seva';
import SevaVenkatramanDev from './pages/SevaVenkatramanDev';
import SevaMukyapranaDev from './pages/SevaMukyapranaDev';
import SevaMoodaGanapatiDev from './pages/SevaMoodaGanapatiDev';
import SevaModeSelect from './pages/SevaModeSelect';
import SevaAdmin from './pages/SevaAdmin';
import TempleHistory from './pages/TempleHistory';
import Festivals from './pages/Festivals';
import './styles/tailwind.css';
import Contact from './pages/Contact';
import AdminCalendar from './pages/AdminCalendar';
import Events from './pages/Events';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/seva" element={<SevaModeSelect />} />
            <Route path="/seva/select" element={<Seva />} />
            <Route path="/SevaVenkatramanDev" element={<SevaVenkatramanDev />} />
            <Route path="/SevaMukyapranaDev" element={<SevaMukyapranaDev />} />
            <Route path="/SevaMoodaGanapatiDev" element={<SevaMoodaGanapatiDev />} />
            <Route path="/SevaAdmin" element={<SevaAdmin />} />
            <Route path="/TempleHistory" element={<TempleHistory />} />
            <Route path="/Festivals" element={<Festivals />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/AdminCalendar" element={<AdminCalendar />} />
            <Route path="/Events" element={<Events />} />
            {/* Additional routes can be added here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;