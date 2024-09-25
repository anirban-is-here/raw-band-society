import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import JoinUsForm from './components/JoinUsForm';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/join" element={<JoinUsForm />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
