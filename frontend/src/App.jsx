import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import EventDetails from './components/EventDetails/EventDetails';
import Home from './pages/Home/Home';
import Overons from './pages/Overons/Overons';
import Busreis from './pages/Busreis/Busreis';
import Contact from './pages/Contact/Contact';


import './App.css'

function App() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
        try {
            const response = await fetch('/data/events.json');
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
        }

        fetchEvents();
    }, []);

    return (
      
      <Router>
          <Navbar events={events}/>
          <Routes>
             <Route path='/' element={<Home events={events} />} />
             <Route path='/event/:eventId' element={<EventDetails events={events} />} />
             <Route path='/Overons' element={<Overons />} />
             <Route path='/Busreis' element={<Busreis />} />
             <Route path='/Contact' element={<Contact />} />
          </Routes>
            <Footer />
      </Router>
        
    );
}

export default App;
