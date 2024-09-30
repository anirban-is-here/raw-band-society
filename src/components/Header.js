import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Menu icon for the button
import { Link } from 'react-router-dom';
import logo from '../assets/diu bs.png';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control drawer visibility

  // Function to toggle the drawer (open/close)
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Drawer content (shown when screen is small and menu button is clicked)
  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/committee">
          <ListItemText primary="Committee" />
        </ListItem>
        <ListItem button component={Link} to="/events">
          <ListItemText primary="Archives" />
        </ListItem>
        <ListItem button component={Link} to="/join">
          <ListItemText primary="Join Us" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} to="/login">
          <ListItemText primary="Login" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
      <Toolbar>
        <Box
          sx={{ display: 'flex', height: '70px', alignItems: 'center', flexGrow: 1 }}
          component={Link}
          to="/"
          style={{ textDecoration: 'none' }} // Removes underline from Link
        >
          <img src={logo} alt="Band Society Logo" style={{ height: '60px', marginRight: '10px' }} />
          <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
            Band Society
          </Typography>
        </Box>

        {/* Hide buttons on small screens, show on larger screens */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit" component={Link} to="/" sx={{ color: 'secondary.main' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/committee" sx={{ color: 'secondary.main' }}>
            Committee
          </Button>
          <Button color="inherit" component={Link} to="/events" sx={{ color: 'secondary.main' }}>
            Archives
          </Button>
          <Button color="inherit" component={Link} to="/join" sx={{ color: 'secondary.main' }}>
            Join Us
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ color: 'secondary.main' }}>
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/login" sx={{ color: 'secondary.main' }}>
            Login
          </Button>
        </Box>

        {/* Menu button for small screens */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', sm: 'none' }, color: 'black' }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for small screens */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerList}
      </Drawer>
    </AppBar>
  );
}

export default Header;
