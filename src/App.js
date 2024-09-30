import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CommitteePage from './components/CommitteePage';
import EventsPage from './components/EventsPage';
import JoinUsForm from './components/JoinUsForm';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashBoard.js';
import UserDashboard from './components/UserDashboard.js';
import Footer from './components/Footer';  // Import Footer

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          
          <div style={{ flex: '1' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/join" element={<JoinUsForm />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/committee" element={<CommitteePage />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/user-dashboard" element={<UserDashboard />} />
            </Routes>
          </div>
          
          <Footer /> {/* Footer at the bottom */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
