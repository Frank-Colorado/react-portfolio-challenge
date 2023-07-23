import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
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
          marginTop: "5rem",
        }}
      >
        About Me
      </Typography>

      <Stack
        direction="row"
        spacing={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          alignContent: "center",
          height: "55%",
        }}
      >
        <Avatar
          alt="Frank Colorado"
          src="/static/images/avatar/1.jpg"
          sx={{
            width: "20%",
            height: "70%",
          }}
        />
        <Typography
          paragraph
          href="/"
          sx={{
            fontFamily: "Constantia Regular",
            fontWeight: 500,
            fontSize: "1.5rem",
            letterSpacing: ".2rem",
            color: "inherit",
            textDecoration: "none",
            width: "30%",
          }}
          align="center"
        >
          Frank Colorado is an up and coming full stack web developer based in
          Tampa, Florida. Below you can find his portfolio highlighting some of
          his development work, as well as information on how to contact him.
        </Typography>
      </Stack>
    </div>
  );
};

export default Home;
