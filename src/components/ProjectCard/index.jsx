import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  CardActions,
  CardActionArea,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = ({ name, image, github, website }) => {
  return (
    <Card
      sx={{
        minWidth: 380,
        minHeight: 350,
        backgroundColor: "black",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={image}
          alt="{name} picture"
        />

        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="a"
            href={website}
            target="_blank"
            align="center"
            sx={{
              color: "white",
              fontFamily: "Constantia Regular",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              "&:hover": {
                color: "#948B89",
                transition: "color 0.5s ease-in",
              },
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{
            "&:hover": {
              transform: "scale(1.2)",
              transition: "transform 0.5s ease-in",
            },
          }}
          aria-label="github"
          component="a"
          href={github}
          target="_blank"
        >
          <GitHubIcon
            sx={{
              color: "white",

              width: "15%",
              height: "15%",
            }}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
