import React, { useState } from 'react';
import './JoinUsForm.css';

function JoinUsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [instrument, setInstrument] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}, for joining the Band Society!`);
  };

  return (
    <div className="join-us-page">
      <h1>Join the Band Society</h1>
      <p>Are you passionate about music? Join our community and let your musical journey begin.</p>

      <form onSubmit={handleSubmit} className="join-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Instrument(s) You Play"
          value={instrument}
          onChange={(e) => setInstrument(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Experience Level"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        />
        <button type="submit">Join Now</button>
      </form>

      <section className="testimonials">
        <h2>What Our Members Say</h2>
        <blockquote>
          "The Band Society helped me discover my passion for jazz music. The community is supportive, and the workshops are amazing!" 
          - Jane Doe
        </blockquote>
        <blockquote>
          "I joined as a complete beginner, and now I'm confident enough to perform live on stage. It's been an incredible journey!" 
          - John Smith
        </blockquote>
      </section>
    </div>
  );
}

export default JoinUsForm;
