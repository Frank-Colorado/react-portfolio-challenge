import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

const pages = [
  {
    name: 'About Me',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/portfolio',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Resume',
    path: '/resume',
  },
];
const Header = () => {
  return (
    <AppBar
      style={{
        backgroundColor: '#0A090C',
        height: '11vh',
      }}
      position="static"
    >
      <Container maxWidth="false">
        <Toolbar>
          <Typography
            variant="h3"
            component={Link}
            to="/"
            sx={{
              fontFamily: 'Constantia Regular',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            align="center"
          >
            Frank Colorado
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page, index) => (
              <Link
                to={`${page.path}`}
                key={index}
                style={{
                  color: '#F7FFF7',
                  textDecoration: 'none',
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    fontFamily: 'Constantia Regular',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    margin: '2rem 1rem',
                    '&:hover': {
                      color: '#948B89',
                      borderBottom: '2px solid #F7FFF7',
                      transition: 'all .4s ease-in',
                    },
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
