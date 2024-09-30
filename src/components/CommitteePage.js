import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';

// Sample import of images (add all your images accordingly)
import committeeImage from '../assets/total list.jpg';
import convenor from '../assets/tithi mam.jpg'; 
import president from '../assets/ekram.jpg';
import vicePresident from '../assets/noushad.jpg';
import generalSecretary from '../assets/Mahin.jpg';
import jointSecretary from '../assets/hasin_js.jpg';
import organizingSecretary1 from '../assets/sadman.jpg';
import treasurer from '../assets/rejuan.jpg';
import organizingSecretary2 from '../assets/bornil.jpg';
import culturalAndMusicSecretary from '../assets/protik.jpg';
import musicCuratorAndMelodyDesigner from '../assets/epa.jpg';
import eventManager from '../assets/onor.jpg';
import musicAnalyst1 from '../assets/farhan.jpg';
import musicAnalyst2 from '../assets/anik.jpg';
import musicCurator1 from '../assets/anik_sen.jpg';
import musicCurator2 from '../assets/joty.jpg';
import assistantOrganizingSecretary1 from '../assets/remel.jpg';
import assistantOrganizingSecretary2 from '../assets/aungsun.jpg';
import assistantOrganizingSecretary3 from '../assets/dipto.jpg';
import assistantCulturalAndMusicSecretary1 from '../assets/shafkat.jpg';
import assistantCulturalAndMusicSecretary2 from '../assets/apon.jpg';
import mediaAndCommunicationManager from '../assets/mowin.jpg';
import digitalContentManager from '../assets/joy.jpg';
import advisor1 from '../assets/shoikat.jpg';
import advisor2 from '../assets/sakib.jpg';
import advisor3 from '../assets/abir.jpg';
import advisor4 from '../assets/anirban.jpg';


function CommitteePage() {
  const committeeMembers = [
    { name: 'Akram Al Maruf', position: 'President', image: president },
    { name: 'Noushad Mostafa', position: 'Vice President', image: vicePresident },
    { name: 'Md Mahin Bin Ikbal', position: 'General Secretary', image: generalSecretary },
    { name: 'Nur Mohammad Rejuan', position: 'Treasurer', image: treasurer },
    { name: 'Hasin Dahalavi', position: 'Joint Secretary', image: jointSecretary },
    { name: 'Md. Sadman Sadik', position: 'Organizing Secretary', image: organizingSecretary1 },
    { name: 'Bornil Das', position: 'Organizing Secretary', image: organizingSecretary2  },
    { name: 'Mahmudul Hasan', position: 'Cultural & Music Secretary', image: culturalAndMusicSecretary },
    { name: 'Raisha Fairose Epa', position: 'Music Curator & Melody Designer', image: musicCuratorAndMelodyDesigner },
    { name: 'Farhan Rahman', position: 'Music Analyst', image: musicAnalyst1 },
    { name: 'Md Mominur Rahman Anik', position: 'Music Analyst', image: musicAnalyst2 },
    { name: 'Anik Sen', position: 'Music Curator', image: musicCurator1 },
    { name: 'Joty Acharjee', position: 'Music Curator', image: musicCurator2 },
    { name: 'Dipto Kumar Saha', position: 'Asst. Organizing Secretary', image: assistantOrganizingSecretary3 },
    { name: 'Rayhan Aman Remel', position: 'Asst. Organizing Secretary', image: assistantOrganizingSecretary1 },
    { name: 'Aung Sun', position: 'Asst. Organizing Secretary', image: assistantOrganizingSecretary2 },
    { name: 'Shafkat Kabir Prottoy', position: 'Asst. Cultural & Music Secretary', image: assistantCulturalAndMusicSecretary1 },
    { name: 'Apon Kanti Das', position: 'Asst. Cultural & Music Secretary', image: assistantCulturalAndMusicSecretary2 },
    { name: 'Md Mowin Uddin', position: 'Media & Communication Manager', image: mediaAndCommunicationManager },
    { name: 'Joy Gopal Roy', position: 'Digital Content Manager', image: digitalContentManager },
    { name: 'Md. Ishrak Alam Khan', position: 'Event Manager', image: eventManager }
    
  ];

  const advisors = [
    { name: 'Ms. Farjana Yesmin', position: 'Convenor', image: convenor },
    { name: 'Mehrab Emam Shoikot', position: 'Advisor', image: advisor1 },
    { name: 'Md Nazmus Sakib', position: 'Advisor', image: advisor2 },
    { name: 'Mahadi Hasan', position: 'Advisor', image: advisor3 },
    { name: 'Anirban Mukherjee', position: 'Advisor', image: advisor4 }
    
    
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Meet Our Committee
      </Typography>
      
      {/* Group Image of All 21 Members */}
      <Card sx={{ mb: 4 }}>
        <CardMedia
          component="img"
          alt="Group of 21 Members"
          height="620"
          image={committeeImage}
        />
      </Card>

      {/* Convenor and Advisors Section */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
        Advisors & Convenor
      </Typography>
      <Grid container spacing={3}>
        {advisors.map((advisor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
            sx={{
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',  // Scale effect on hover
                  boxShadow: 6,              // Shadow elevation on hover
                },
              }}
            >
              <CardMedia
                component="img"
                alt={advisor.name}
                height="300"
                image={advisor.image}
              />
              <CardContent>
                <Typography variant="h6">{advisor.name}</Typography>
                <Typography variant="body2" color="textSecondary">{advisor.position}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Committee Members Section */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
        Committee Members
      </Typography>
      <Grid container spacing={3}>
        {committeeMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
            sx={{
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                alt={member.name}
                height="300"
                image={member.image}
              />
              <CardContent>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="textSecondary">{member.position}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CommitteePage;
