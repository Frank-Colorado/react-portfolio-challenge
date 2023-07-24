import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <AppBar
      style={{
        backgroundColor: "#0A090C",
        height: "11vh",
        marginTop: "7vh",
      }}
      position="static"
    >
      <Container maxWidth="false">
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <IconButton aria-label="GitHub" color="inherit" href="">
              <GitHubIcon
                sx={{
                  width: "3rem",
                  height: "3rem",
                  margin: "1.5rem",
                }}
              />
            </IconButton>
            <IconButton aria-label="LinkedIn" color="inherit" href="">
              <LinkedInIcon
                sx={{
                  width: "3rem",
                  height: "3rem",
                  margin: "1.5rem",
                }}
              />
            </IconButton>
            <IconButton size="large" aria-label="Email" color="inherit" href="">
              <EmailIcon
                sx={{
                  width: "3rem",
                  height: "3rem",
                  margin: "1.5rem",
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
