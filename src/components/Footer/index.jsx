import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import footerIcons from "../../utils/footerIcons";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const iconStyle = {
    width: "3rem",
    height: "3rem",
    margin: "1.5rem",
  };

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
            {footerIcons.map((icon, index) => (
              <IconButton
                aria-label="GitHub"
                color="inherit"
                href={icon.link}
                key={index}
                target="_blank"
                sx={{
                  "&:hover": {
                    transform: "scale(1.2)",
                    transition: "transform 0.5s ease-in",
                  },
                }}
              >
                {icon.icon === "GitHub" ? (
                  <GitHubIcon sx={iconStyle} />
                ) : icon.icon === "LinkedIn" ? (
                  <LinkedInIcon sx={iconStyle} />
                ) : (
                  <EmailIcon sx={iconStyle} />
                )}
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
