import React from 'react';
import './EventsPage.css';

function EventsPage() {
  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <ul className="upcoming-events">
        <li>
          <h2>Annual Music Night</h2>
          <p>Date: October 14, 2024</p>
          <p>Location: University Auditorium</p>
          <p>Description: Join us for an unforgettable evening of live performances by our talented members and guest artists.</p>
        </li>
        <li>
          <h2>Jazz Workshop</h2>
          <p>Date: November 5, 2024</p>
          <p>Location: Music Room</p>
          <p>Description: A hands-on workshop on jazz improvisation techniques, led by a professional jazz musician.</p>
        </li>
      </ul>

      <h1>Past Events</h1>
      <ul className="past-events">
        <li>
          <h2>Rock Fest 2023</h2>
          <p>Date: April 21, 2023</p>
          <p>Location: Main Stage</p>
          <p>Description: A high-energy rock music festival featuring performances from students and local bands.</p>
        </li>
        <li>
          <h2>Classical Evening</h2>
          <p>Date: December 11, 2022</p>
          <p>Location: Symphony Hall</p>
          <p>Description: A night of classical performances by our members, featuring solo and ensemble pieces.</p>
        </li>
      </ul>
    </div>
  );
}

export default EventsPage;
