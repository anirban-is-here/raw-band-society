import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Button, TextField, Typography, Container } from '@mui/material';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'adminpass') {
      // Navigate to admin dashboard
      navigate('/admin-dashboard');
    } else if (username === 'user' && password === 'userpass') {
      // Navigate to regular user page
      navigate('/user-dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Paper sx={{ backgroundColor: 'background.paper', padding: 2 }}>
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        fullWidth
        label="Username"
        variant="outlined"
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        variant="outlined"
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleLogin}
        sx={{ mt: 2 }}
      >
        Login
      </Button>
    </Container>
    </Paper>
  );
}

export default LoginPage;