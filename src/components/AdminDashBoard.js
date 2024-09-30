import React from 'react';
import { Typography, Container } from '@mui/material';

function AdminDashboard() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      {/* Add admin-specific content */}
      <Typography>Welcome, Admin! You can upload events and manage content here.</Typography>
    </Container>
  );
}

export default AdminDashboard;
