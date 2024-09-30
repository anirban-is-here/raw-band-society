import React from 'react';
import { Paper, Typography, Box, Container } from '@mui/material';
import bandImage from '../assets/diu bs.jpg';

function HomePage() {
  return (
    <Paper sx={{ backgroundColor: 'background.paper', padding: 2 }}>
      <Container>
        {/* Image Section */}
        <Box
          component="img"
          src={bandImage}
          alt="Band Society"
          sx={{
            width: '100%',            // Full width of the container
            height: 'auto',            // Keep aspect ratio
            maxHeight: '500px',        // Limit the max height for better scaling
            objectFit: 'cover',        // Ensures the image covers the area without being distorted
            borderRadius: 2,           // Optional: Adds rounded corners for better aesthetics
            mb: 4 ,
            mt: 7                     // Margin bottom for spacing after the image
          }}
        />

        {/* Welcome Section */}
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'darkred' }}>
          Welcome to the Band Society
        </Typography>
        <Typography variant="body1" align="center" gutterBottom sx={{color: 'darkred' }}>
          The Band Society is a community of passionate musicians, born from a love for quality music that transcends genres. 
          Whether you're into jazz, rock, classical, or indie, you'll find like-minded people to share your love for music.
        </Typography>

        {/* Our Story Section */}
        <section className="club-history">
          <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'darkred' }}>
            Our Story
          </Typography>
          <Typography variant="body1" align="justify">
            Founded in 2015, the Band Society has grown from a small group of enthusiasts to one of the most active music communities 
            on campus. We've performed at university events, hosted workshops, and collaborated with renowned artists.
          </Typography>
        </section>

        {/* What We Do Section */}
        <section className="what-we-do" style={{ marginTop: '2rem' }}>
          <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'darkred' }}>
            What We Do
          </Typography>
          <Typography variant="body1" align="justify">
            The Band Society organizes weekly jam sessions, concerts, and workshops. Our members learn from each other, experiment 
            with different genres, and collaborate on original music projects. We strive to nurture creativity and musicianship.
          </Typography>
        </section>

        {/* Achievements Section */}
        <section className="achievements" style={{ marginTop: '2rem' }}>
          <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'darkred' }}>
            Achievements
          </Typography>
          <Typography variant="body1" align="justify">
            <ul>
              <li>Won the university band competition 3 times in a row (2017, 2018, 2019)</li>
              <li>Performed at the National Music Festival 2022</li>
              <li>Collaborated with XYZ Artists for a live concert in 2023</li>
            </ul>
          </Typography>
        </section>
      </Container>
    </Paper>
  );
}

export default HomePage;
