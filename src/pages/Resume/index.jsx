import {
  Typography,
  Container,
  Grid,
  Paper,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const frontEndSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "React",
  "Bootstrap",
  "Material UI",
  "Handlebars",
  "Responsive Design",
];
const backEndSkills = [
  "APIs",
  "Node",
  "Express",
  "MySQL, Sequelize",
  "MongoDB, Mongoose",
  "REST",
  "GraphQL",
  "Authentication",
  "PWA",
];

const useStyles = makeStyles(() => ({
  listItem: {
    marginBottom: "0.5rem",
    color: "white",
    padding: "0.5rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  listItemText: {
    fontFamily: "Constantia Regular",
    fontWeight: 200,
    letterSpacing: ".3rem",
    color: "#0A090C",
    fontSize: "1rem",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
  },
}));

const header = {
  fontFamily: "Constantia Regular",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
  marginTop: "4rem",
};

const Resume = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Typography variant="h3" align="center" sx={header}>
        Resume
      </Typography>
      <Typography
        variant="h5"
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
        Dowload My Resume {""}
        <Link
          href="https://drive.google.com/file/d/1Z3Z3Q4Z3Z3Q4Z3Q4Z3Q4Z3Q4Z3Q4Z3Q4/view?usp=sharing"
          target="_blank"
          rel="noopener"
          sx={{
            color: "#948B89",
            textDecoration: "none",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              height: 2,
              width: 0,
              backgroundColor: "#948B89",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "100%",
            },
            "&:hover": {
              color: "#0A090C",
            },
          }}
        >
          Here
        </Link>
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid
          item
          xs={3}
          container
          direction="column"
          justifyContent="end"
          marginBottom="2rem"
          alignItems="center"
        >
          <Typography
            variant="h5"
            align="center"
            sx={header}
            style={{
              borderBottom: "1px solid #948B89",
            }}
          >
            Front End Skills
          </Typography>
          {/* A list of skills */}

          <ul>
            {frontEndSkills.map((item, index) => (
              <li key={index} className={classes.listItem}>
                <span className={classes.listItemText}>{item}</span>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid
          item
          xs={3}
          container
          justifyContent="start"
          marginBottom="2rem"
          direction="column"
          alignItems="center"
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontFamily: "Constantia Regular",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              marginTop: "4rem",
              borderBottom: "1px solid #948B89",
            }}
          >
            Back End Skills
          </Typography>
          {/* A list of skills */}
          <ul>
            {backEndSkills.map((item, index) => (
              <li key={index} className={classes.listItem}>
                <span className={classes.listItemText}>{item}</span>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;
