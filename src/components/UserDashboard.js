import React from 'react';
import { Typography, Container } from '@mui/material';

function UserDashboard() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>User Dashboard</Typography>
      {/* Add user-specific content */}
      <Typography>Welcome, User! Enjoy exploring the Band Society's events and music.</Typography>
    </Container>
  );
}

export default UserDashboard;
