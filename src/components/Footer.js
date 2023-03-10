import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Button,
  Grid,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../styles/index.css";
import "animate.css";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="up" in={trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Footer = (props) => {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
          <Toolbar>
            <Grid xs sx={{ md: "flex", xs: "none" }}>
              <Typography variant="h5" component="div" textAlign="center">
                Redes Sociales
              </Typography>
            </Grid>
            <Grid container xs alignItems="stretch" padding="15px">
              <Grid
                item
                marginRight="20px"
                className="animate__animated animate__flipInY"
              >
                <Button variant="contained" startIcon={<FacebookIcon />}>
                  <Typography variant="button" color="white">
                    Mintur
                  </Typography>
                </Button>
              </Grid>
              <Grid
                item
                marginRight="20px"
                className="animate__animated animate__flipInY"
              >
                <Button variant="contained" startIcon={<TwitterIcon />}>
                  <Typography variant="button" color="white">
                    @mintur_oficial
                  </Typography>
                </Button>
              </Grid>
              <Grid
                item
                marginRight="20px"
                className="animate__animated animate__flipInY"
              >
                <Button variant="contained" startIcon={<InstagramIcon />}>
                  <Typography variant="button" color="white">
                    @mintur.cuba
                  </Typography>
                </Button>
              </Grid>
              <Grid
                item
                marginRight="20px"
                className="animate__animated animate__flipInY"
              >
                <Button variant="contained" startIcon={<YouTubeIcon />}>
                  <Typography variant="button" color="white">
                    Mintur
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Footer;
