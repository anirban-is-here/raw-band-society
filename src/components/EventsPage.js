import React, { useState } from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';  // Import Lightbox CSS

// Example image imports
import event1Image1 from '../assets/events/2019pose.jpg'; 
import event1Image2 from '../assets/events/earlier images/team bs.jpg'; 
import event1Image3 from '../assets/events/earlier images/teambs.jpg'; 
import event1Image4 from '../assets/events/earlier images/teambs3.jpg';
import event1Image5 from '../assets/events/earlier images/teambs4.jpg';  

import event2Image1 from '../assets/events/earlier images/veryold.jpg';
import event2Image2 from '../assets/events/earlier images/nafissirearlymeet.jpg';
import event2Image3 from '../assets/events/earlier images/nafeessirmeet2.jpg';
import event2Image4 from '../assets/events/earlier images/nafis sir.jpg';
import event2Image5 from '../assets/events/earlier images/club.jpg'; 

import event3Image1 from '../assets/events/earlier images/2019recruitment.jpg'; 
import event3Image2 from '../assets/events/earlier images/2019recruit2.jpg'; 
import event3Image3 from '../assets/events/earlier images/drumsession.jpg'; 
import event3Image4 from '../assets/events/earlier images/drum2.jpg'; 
import event3Image5 from '../assets/events/earlier images/hdgf.jpg'; 

// Example data structure
const events = [
  {
    name: "Nostalgic Moments",
    details: "These photographs represents the early moments of the Band Society with the founding members including the great Nafis Al Amin Sir.",
    images: [event1Image1, event1Image2, event1Image3, event1Image4, event1Image5]  // Add more images if necessary
  },
  
  {
    name: "Earlier Meettings",
    details: "The meettings that made Band Society we see today.",
    images: [event2Image1, event2Image2, event2Image3, event2Image4, event2Image5]  // Add more images if necessary
  },

  {
    name: "Member Recruitment 2019 & Drum Lessons",
    details: "These photographs represents the early moments of the Band Society with the founding members including the great Nafis Al Amin Sir.",
    images: [event3Image1, event3Image2, event3Image3, event3Image4, event3Image5]  // Add more images if necessary
  },

];

function EventsPage() {
  const [isOpen, setIsOpen] = useState(false);  // Lightbox open state
  const [photoIndex, setPhotoIndex] = useState(0);  // Current image index
  const [currentImages, setCurrentImages] = useState([]);  // Current event images

  const handleImageClick = (images, index) => {
    setCurrentImages(images);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <Container sx={{ mt: 4 }}>
      

      {events.map((event, eventIndex) => (
        <div key={eventIndex}>
          <Typography variant="h5" sx={{ mt: 4 }}>{event.name}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>{event.details}</Typography>

          <Grid container spacing={2}>
            {event.images.map((image, imageIndex) => (
              <Grid item xs={12} sm={6} md={4} key={imageIndex}>
                <Card onClick={() => handleImageClick(event.images, imageIndex)}>
                  <CardMedia
                    component="img"
                    image={image}
                    alt={`Event Image ${imageIndex + 1}`}
                    height="300"
                    sx={{ cursor: 'pointer' }}  // Show cursor pointer for clickable effect
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}

      {/* Lightbox component */}
      {isOpen && (
        <Lightbox
          mainSrc={currentImages[photoIndex]}
          nextSrc={currentImages[(photoIndex + 1) % currentImages.length]}
          prevSrc={currentImages[(photoIndex + currentImages.length - 1) % currentImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + currentImages.length - 1) % currentImages.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % currentImages.length)}
        />
      )}
    </Container>
  );
}

export default EventsPage;
