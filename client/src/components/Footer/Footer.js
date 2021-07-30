import React from "react";
import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  containerFooter: {
    position: "relative",
    backgroundColor: "hsl(308deg 44% 33%)",
    width: "100%",
    height: "auto",
  },
  containerFooterCopyright: {
    position: "absolute",
    width: "20%",
    left: 20,
    bottom: 5,
  },
  containerFooterLinks: {
    "& p": {
      margin: "10px auto",
      color: "white",
      fontWeight: "bold",
    },
    "& a": {
      textDecoration: "none",
    },
  },
  footerLinksDivider: {
    borderBottom: "2px solid hsl(308deg 100% 80%)",
  },
  footerCopyright: {
    color: "White",
    fontWeight: "bold",
    padding: 5,
    margin: "auto auto 10px 10px",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" className={classes.containerFooter}>
      <Grid item container justifyContent="flex-end" style={{ width: "100%" }}>
        <Grid
          item
          container
          justifyContent="flex-end"
          className={classes.containerFooterCopyright}
        >
          <span className={classes.footerCopyright}>
            © Copyright 2021 <a href="/about-Us">G14</a>
          </span>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          style={{ width: "60%" }}
        >
          <div className={classes.containerFooterLinks}>
            <Link to="/about-Spa-tify">
              <p>Sobre Spa-tify</p>
            </Link>
            <Divider
              variant="inset"
              component="p"
              className={classes.footerLinksDivider}
            />
            <Link to="/login">
              <p>ingresar</p>
            </Link>
            <Divider
              variant="inset"
              component="p"
              className={classes.footerLinksDivider}
            />
            <Link to="/userRegister">
              <p>registrarse</p>
            </Link>
            <Divider
              variant="inset"
              component="p"
              className={classes.footerLinksDivider}
            />
            <Link to="/about-Us">
              <p>About G14</p>
            </Link>
            <Divider
              variant="inset"
              component="p"
              className={classes.footerLinksDivider}
            />
          </div>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          style={{ width: "20%" }}
        >
          <div className={classes.containerFooterLinks}>
            <Link to="/covid">
              <p>Protocolo COVID-19</p>
            </Link>
            <Divider
              variant="inset"
              component="p"
              className={classes.footerLinksDivider}
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
