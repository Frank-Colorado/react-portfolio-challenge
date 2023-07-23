import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

const pages = ["About Me", "Portfolio", "Contact", "Resume"];
const Header = () => {
  return (
    <AppBar
      style={{
        backgroundColor: "#0A090C",
        height: "11vh",
      }}
      position="static"
    >
      <Container maxWidth>
        <Toolbar>
          <Typography
            variant="h3"
            component="a"
            href="/"
            sx={{
              fontFamily: "Constantia Regular",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            align="center"
          >
            Frank Colorado
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                variant="text"
                sx={{
                  fontFamily: "Constantia Regular",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  margin: "2rem 1rem",
                  "&:hover": {
                    color: "#F7FFF7",
                    opacity: 0.7,
                    borderBottom: "2px solid #F7FFF7",
                    transition: "all .5s ease-in",
                  },
                }}
                component="a"
                href={`/${page.toLowerCase()}`}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
