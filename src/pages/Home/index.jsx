import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import profileImage from '../../assets/me.jpg';

const Home = () => {
  return (
    <div
      style={{
        height: '100vh',
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
          marginTop: '5rem',
        }}
      >
        About Me
      </Typography>

      <Stack
        direction="row"
        spacing={3}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          height: '55%',
        }}
      >
        <Avatar
          alt="Frank Colorado"
          src={profileImage}
          sx={{
            width: '20%',
            height: '75%',
            marginRight: '5rem',
          }}
        />
        <Typography
          paragraph
          href="/"
          sx={{
            fontFamily: 'Constantia Regular',
            fontWeight: 500,
            fontSize: '1.5rem',
            letterSpacing: '.2rem',
            color: 'inherit',
            textDecoration: 'none',
            width: '30%',
          }}
          align="center"
        >
          Frank Colorado is an up and coming full stack web developer working
          completely remote. You can find his portfolio highlighting some of his
          development work and his resume throughout the site, as well as links
          to platforms where you can find him and his work in the footer.
        </Typography>
      </Stack>
    </div>
  );
};

export default Home;
