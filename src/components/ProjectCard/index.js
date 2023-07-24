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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link
          color="inherit"
          underline="none"
          href={website}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="{name} picture"
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="github" component="a" href={github}>
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
