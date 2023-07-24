import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProjectCard from "../../components/ProjectCard";

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
