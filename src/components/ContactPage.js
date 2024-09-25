import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Email: <a href="mailto:bandsociety@university.edu">bandsociety@university.edu</a></p>
      <p>Phone: +123 456 789</p>
      <p>Address: 123 University Road, Music Block</p>
    </div>
  );
}

export default ContactPage;
