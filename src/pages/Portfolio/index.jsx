import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import image from "../../assets/me.jpg";

const Portfolio = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontFamily: "Constantia Regular",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          margin: "4rem",
        }}
      >
        Projects
      </Typography>
      <Grid container spacing={2}>
        {/* {projects.map((project) => (
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            marginBottom="2rem"
          >
            <ProjectCard />
          </Grid>
        ))} */}
      </Grid>
    </div>
  );
};

export default Portfolio;
