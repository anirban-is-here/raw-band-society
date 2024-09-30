import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Container, Box } from '@mui/material';


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
    <container maxwidth="sm">
    <Paper elevation={3} sx={{ padding: 4, marginTop: 0 }}>
    <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'darkred' }}>
          Join the Band Society
        </Typography>
        <Typography variant="body1" align="center" gutterBottom sx={{ fontStyle: 'italic', color: 'black' }}>
          Are you passionate about music? Join our community and let your musical journey begin.
        </Typography>

        {/* Form Section */}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Your Email"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Instrument(s) You Play"
            variant="outlined"
            fullWidth
            value={instrument}
            onChange={(e) => setInstrument(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Experience Level"
            variant="outlined"
            fullWidth
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Join Now
          </Button>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ mt: 4 }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'darkred' }}>
            What Our Members Say
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ color: 'black' }}>
            "The Band Society helped me discover my passion for jazz music. The community is supportive, and the workshops are amazing!" 
            - Jane Doe
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ color: 'black' }}>
            "I joined as a complete beginner, and now I'm confident enough to perform live on stage. It's been an incredible journey!" 
            - John Smith
          </Typography>
        </Box>
      </Paper>
  </container>
  );
}

export default JoinUsForm;
