import React, { useRef } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Box,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import emailjs from '@emailjs/browser';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#0A090C',
            '--TextField-brandBorderHoverColor': '#0A090C',
            '--TextField-brandBorderFocusedColor': '#0A090C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

const Contact = () => {
  const outerTheme = useTheme();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontFamily: 'Constantia Regular',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
          margin: '4rem',
        }}
      >
        Contact Me
      </Typography>
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            boxShadow: '0 0 5px 0 rgba(10, 9, 12, .5)',
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: '100%',
              padding: '1rem',
            }}
          >
            <form name="contact" ref={formRef} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="name"
                      name="name"
                      label="Name"
                      type="text"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="message"
                      name="message"
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} container justifyContent="center">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        width: '30%',
                        backgroundColor: '#0A090C',
                        color: '#F7FFF7',
                        '&:hover': {
                          backgroundColor: '#F7FFF7',
                          color: '#0A090C',
                        },
                      }}
                    >
                      Send
                    </Button>
                  </Grid>
                </ThemeProvider>
              </Grid>
            </form>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
