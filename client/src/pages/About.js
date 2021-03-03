import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '../components/Typography';
import AboutLayout from './HomeLayout';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
const backgroundImage = 'https://wallpaperplay.com/walls/full/a/5/0/164628.jpg';

const placeHolderImage =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1200px-Placeholder_no_text.svg.png';

const tonyImage =
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/25659359_1592018460891328_3469076148730558199_n.jpg?_nc_cat=110&ccb=3&_nc_sid=8bfeb9&_nc_ohc=GF_gdSH25hsAX8M5Wzt&_nc_ht=scontent-dfw5-1.xx&oh=3a1a6e7e2feb13f662ff13e74851cfcd&oe=6061862B';

const loganImage =
  'https://ca.slack-edge.com/T019A0SE3U2-U01AE7TPTAL-43701f9fa0b7-512';

const marioImage =
  'https://ca.slack-edge.com/T019A0SE3U2-U0192JGFV9V-c6e4b3ed4a64-512';

const parthImage =
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/15391431_10209786289487350_1235057481723360132_o.jpg?_nc_cat=109&ccb=3&_nc_sid=174925&_nc_ohc=CIcHa5YaSWEAX88R20Z&_nc_ht=scontent-dfw5-2.xx&oh=15dfbb4364b3ebbbe7688b917a2e7719&oe=60637E68';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9',
    backgroundPosition: 'center',
    height: '100vh',
  },
  button: {
    minWidth: 200,
    background: '#00008b',
    marginTop: theme.spacing(2),
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(25),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    width: 'auto',
  },
  container: {
    justifyContent: 'center',
    display: 'flex',
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  tony: {
    height: 140,
    width: '25vh',
    paddingTop: '56.25%', // 16:9
    backgroundImage: `url(${tonyImage})`,
  },
  logan: {
    height: 140,
    width: '25vh',
    paddingTop: '56.25%', // 16:9
    backgroundImage: `url(${loganImage})`,
  },
  parth: {
    height: 140,
    width: '25vh',
    paddingTop: '56.25%', // 16:9
    backgroundImage: `url(${parthImage})`,
  },
  mario: {
    height: 140,
    width: '25vh',
    paddingTop: '56.25%', // 16:9
    backgroundImage: `url(${marioImage})`,
  },
  subtitle: {
    paddingTop: theme.spacing(5),
  },
});

function About(props) {
  const { classes } = props;

  return (
    <Grid>
      <AboutLayout backgroundClassName={classes.background}>
        <Typography color="inherit" align="center" variant="h2" marked="center">
          About Us
        </Typography>
        <Typography
          className={classes.subtitle}
          color="inherit"
          align="center"
          variant="h5"
          marked="center"
        >
          About Us
        </Typography>
        <img
          style={{ display: 'none' }}
          src={backgroundImage}
          alt="increase priority"
        />
        <Typography
          color="inherit"
          align="center"
          className={classes.subtitle}
          variant="h5"
        >
          Our Team
        </Typography>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className={classes.root}>
                <CardMedia className={classes.tony}></CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h6" justifyContent="center">
                    Tony Crosby
                  </Typography>
                  <Button>Github</Button>
                  <Button>Contact</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className={classes.root}>
                <CardMedia className={classes.logan} />
                <CardContent>
                  <Typography gutterBottom variant="h6" justifyContent="center">
                    Logan Pippin
                  </Typography>
                  <Button>Github</Button>
                  <Button>Contact</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className={classes.root}>
                <CardMedia className={classes.parth} />
                <CardContent>
                  <Typography gutterBottom variant="h6" justifyContent="center">
                    Parth Patel
                  </Typography>
                  <Button>Github</Button>
                  <Button>Contact</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className={classes.root}>
                <CardMedia className={classes.mario} />
                <CardContent>
                  <Typography gutterBottom variant="h6" justifyContent="center">
                    Mario Thompson
                  </Typography>
                  <Button>Github</Button>
                  <Button>Contact</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </AboutLayout>
    </Grid>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
