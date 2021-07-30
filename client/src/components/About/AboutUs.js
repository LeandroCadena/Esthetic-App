import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Image from "../../img/banner.jpg";

const useStyles = makeStyles(() => ({
  bannerImg: {
    width: "100%",
  },
  bannerContainer: {
    position: "relative",
    textAlign: "center",
    width: "100%",
  },
  bannerText: {
    position: "absolute",
    top: "20%",
    left: "15%",
    color: "rgb(121, 47, 111)",
    padding: 10,
  },
  bannerSubtitle: {
    position: "absolute",
    top: "40%",
    left: "6%",
    color: "rgb(121, 47, 111)",
    padding: 10,
    width: "40%",
    fontSize: "1.1rem",
  },
  containerText: {
    padding: 15,
  },
  text: {
    width: "50%",
  },
  containerTextItem: {
    marginBottom: 15,
    width: "80%",
  },
  title: {
    color: "hsl(308deg 44% 33%)",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  subtitle: {
    color: "hsl(308deg 14% 33%)",
  },
  strong: {
    color: "hsl(308deg 44% 33%)",
  },
}));

function AboutUs() {
  const classes = useStyles();

  return (
    <div className="container-main">
      <div className="container">
        <Grid container direction="column">
          <Grid item container direction="column">
            <Grid item container direction="row">
              <div className={classes.bannerContainer}>
                <img className={classes.bannerImg} src={Image} />
                <Typography className={classes.bannerText} variant="h3">
                  About the creators
                </Typography>
                <Typography className={classes.bannerSubtitle}>
                  <b>Spa-tify</b> is the result of the joining effort of 7
                  students, now <b> Developers</b> from #Henry's full-stack web
                  developer bootcamp. It's mainly about a marketplace that
                  gathers providers from many different esthetic services with
                  registered users.
                  <br />
                </Typography>
              </div>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            alignItems="center"
            className={classes.containerText}
          >
            <Grid item className={classes.containerTextItem}>
              <Typography variant="h5">
                ¿But who's behind this idea and great deal of work?
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            justifyContent="center"
            className={classes.containerText}
          >
            <Grid item container direction="column" className={classes.text}>
              <Typography className={classes.title}>Daniel Abuaf</Typography>
              <Typography className={classes.subtitle}>
                <br />
                <strong className={classes.strong}>Github -</strong>{" "}
                <a href="https://github.com/Dabuaf86">Dabuaf86</a>
                <br />
                <strong className={classes.strong}>Gmail -</strong>{" "}
                <a href="dabuaf@gmail.com">dabuaf@gmail.com</a>
                <br />
                <strong className={classes.strong}>LinkedIn -</strong>{" "}
                <a href="https://www.linkedin.com/in/daniel-abuaf-fullstack-dev/">
                  daniel-abuaf-fullstack-dev
                </a>
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            justifyContent="center"
            className={classes.containerText}
          >
            <Grid item container direction="column" className={classes.text}>
              <Typography className={classes.title}>Emiliano Pintos</Typography>
              <Typography className={classes.subtitle}>
                <br />
                <strong className={classes.strong}>Github -</strong>{" "}
                <a href="https://github.com/emilianoagustin">emilianoagustin</a>
                <br />
                <strong className={classes.strong}>Gmail -</strong>{" "}
                <a href="pintos.emiliano@gmail.com">
                  pintos.emiliano@gmail.com
                </a>
                <br />
                <strong className={classes.strong}>LinkedIn -</strong>{" "}
                <a href="https://www.linkedin.com/in/emiliano-agust%C3%ADn-pintos/">
                  emiliano-pintos
                </a>
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            justifyContent="center"
            className={classes.containerText}
          >
            <Grid item container direction="column" className={classes.text}>
              <Typography className={classes.title}>
                Eugenio Buttazzoni
              </Typography>
              <Typography className={classes.subtitle}>
                <br />
                <strong className={classes.strong}>Github -</strong>{" "}
                <a href="https://github.com/eugebutta">eugebutta</a>
                <br />
                <strong className={classes.strong}>Gmail -</strong>{" "}
                <a href="eugebutta2020@gmail.com">eugebutta2020@gmail.com</a>
                <br />
                <strong className={classes.strong}>LinkedIn -</strong>{" "}
                <a href="https://www.linkedin.com/in/eugenio-buttazzoni/">
                  eugenio-buttazzoni
                </a>
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            justifyContent="center"
            className={classes.containerText}
          >
            <Grid item container direction="column" className={classes.text}>
              <Typography className={classes.title}>
                Gabriel De Giorgi
              </Typography>
              <Typography className={classes.subtitle}>
                <br />
                <strong className={classes.strong}>Github -</strong>{" "}
                <a href="https://github.com/gabrieldegiorgi">gabrieldegiorgi</a>
                <br />
                <strong className={classes.strong}>Gmail -</strong>{" "}
                <a href="degiorgi.gabriel@gmail.com">
                  degiorgi.gabriel@gmail.com
                </a>
                <br />
                <strong className={classes.strong}>LinkedIn -</strong>{" "}
                <a href="https://www.linkedin.com/in/gabriel-de-giorgi/">
                  gabriel-de-giorgi
                </a>
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            justifyContent="center"
            className={classes.containerText}
          >
            <Grid item container direction="column" className={classes.text}>
              <Typography className={classes.title}>Ignacio Lozada</Typography>
              <Typography className={classes.subtitle}>
                <br />
                <strong className={classes.strong}>Github -</strong>{" "}
                <a href="https://github.com/ignaloza">ignaloza</a>
                <br />
                <strong className={classes.strong}>Gmail -</strong>{" "}
                <a href="ignacio_lozada@hotmail.com">
                  ignacio_lozada@hotmail.com
                </a>
                <br />
                <strong className={classes.strong}>LinkedIn -</strong>{" "}
                <a href="https://www.linkedin.com/in/ignacio-lozada/">
                  ignacio-lozada
                </a>
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            justifyContent="center"
            className={classes.containerText}
          >
            <Grid item container direction="column" className={classes.text}>
              <Typography className={classes.title}>Leandro Cadena</Typography>
              <Typography className={classes.subtitle}>
                <br />
                <strong className={classes.strong}>Github -</strong>{" "}
                <a href="https://github.com/LeandroCadena">LeandroCadena</a>
                <br />
                <strong className={classes.strong}>Gmail -</strong>{" "}
                <a href="cadenaleandro97@gmail.com">
                  cadenaleandro97@gmail.com
                </a>
                <br />
                <strong className={classes.strong}>LinkedIn -</strong>{" "}
                <a href="https://www.linkedin.com/in/leandro-cadena/">
                  leandro-cadena
                </a>
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            justifyContent="center"
            className={classes.containerText}
          >
            <Grid item container direction="column" className={classes.text}>
              <Typography className={classes.title}>Mario Martínez</Typography>
              <Typography className={classes.subtitle}>
                <br />
                <strong className={classes.strong}>Github -</strong>{" "}
                <a href="https://github.com/mariomartinez81">mariomartinez81</a>
                <br />
                <strong className={classes.strong}>Gmail -</strong>{" "}
                <a href="marioaviva@gmail.com">marioaviva@gmail.com</a>
                <br />
                <strong className={classes.strong}>LinkedIn -</strong>{" "}
                <a href="https://www.linkedin.com/in/mario-mart%C3%ADnez-671131175/">
                  mario-martinez
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AboutUs;
