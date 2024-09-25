import React from 'react';
import './HomePage.css';
import bandImage from '../assets/diu bs.jpg';

function HomePage() {
  return (
    <div className="homepage">
      <h1>Welcome to the Band Society</h1>
      <p>
        The Band Society is a community of passionate musicians, born from a love for quality music that transcends genres. 
        Whether you're into jazz, rock, classical, or indie, you'll find like-minded people to share your love for music.
      </p>
      <img src={bandImage} alt="Band Society" className="hero-image" />

      <section className="club-history">
        <h2>Our Story</h2>
        <p>
          Founded in 2015, the Band Society has grown from a small group of enthusiasts to one of the most active music communities 
          on campus. We've performed at university events, hosted workshops, and collaborated with renowned artists. 
        </p>
      </section>

      <section className="what-we-do">
        <h2>What We Do</h2>
        <p>
          The Band Society organizes weekly jam sessions, concerts, and workshops. Our members learn from each other, experiment 
          with different genres, and collaborate on original music projects. We strive to nurture creativity and musicianship.
        </p>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>Won the university band competition 3 times in a row (2017, 2018, 2019)</li>
          <li>Performed at the National Music Festival 2022</li>
          <li>Collaborated with XYZ Artists for a live concert in 2023</li>
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
