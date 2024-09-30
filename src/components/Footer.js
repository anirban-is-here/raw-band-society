import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GroupIcon from '@mui/icons-material/Group'; // Facebook Group Icon

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        py: 4,
        mt: 5
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1 - About */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="body2">
              The Band Society is a place where musicians come together to practice, appreciate, and perform music of all genres.
            </Typography>
          </Grid>

          {/* Column 2 - Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Box>
              <Link href="/" sx={{ color: 'white', textDecoration: 'none' }}>Home</Link><br />
              <Link href="/committee" sx={{ color: 'white', textDecoration: 'none' }}>Committee</Link><br />
              <Link href="/events" sx={{ color: 'white', textDecoration: 'none' }}>Events</Link><br />
              <Link href="/join" sx={{ color: 'white', textDecoration: 'none' }}>Join Us</Link><br />
              <Link href="/contact" sx={{ color: 'white', textDecoration: 'none' }}>Contact</Link><br />
              <Link href="/login" sx={{ color: 'white', textDecoration: 'none' }}>Login</Link>
            </Box>
          </Grid>

          {/* Column 3 - Social Media */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Follow Us
            </Typography>
            <Typography variant="body2">
              Stay connected through our social media channels.
            </Typography>
            <Box>
              {/* Facebook Page */}
              <IconButton
                aria-label="Facebook Page"
                href="https://www.facebook.com/your-facebook-page-link" // Replace with actual Facebook Page URL
                target="_blank"
                sx={{ color: 'white' }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>

              {/* Facebook Group */}
              <IconButton
                aria-label="Facebook Group"
                href="https://www.facebook.com/groups/your-facebook-group-link" // Replace with actual Facebook Group URL
                target="_blank"
                sx={{ color: 'white' }}
              >
                <GroupIcon fontSize="large" />
              </IconButton>

              {/* YouTube Channel */}
              <IconButton
                aria-label="YouTube Channel"
                href="https://www.youtube.com/your-youtube-channel-link" // Replace with actual YouTube URL
                target="_blank"
                sx={{ color: 'white' }}
              >
                <YouTubeIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2" sx={{ color: 'gray' }}>
            &copy; {new Date().getFullYear()} Band Society. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
