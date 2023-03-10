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
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>

    // <footer className="footer">
    //   <h3 className="contacto headFooter">Redes Sociales</h3>
    //   <div className="contFooter">
    //     <div
    //       ref={ref}
    //       className={`groupA ${
    //         inView ? "animate__animated animate__flipInX" : ""
    //       }`}
    //     >
    //       <a href="#facebook" className="contacto">
    //         <span className="fa fa-facebook-official" aria-hidden="true">
    //           {" "}
    //           Mintur
    //         </span>
    //       </a>
    //       <a href="#facebook" className="contacto">
    //         <i className="fa fa-linkedin-square" aria-hidden="true">
    //           {" "}
    //           Mintur Empresa de Cuba
    //         </i>
    //       </a>
    //       <a href="#Twitter" className="contacto">
    //         <span className="fa fa-twitter" aria-hidden="true">
    //           {" "}
    //           @mintur_oficial
    //         </span>
    //       </a>
    //       <a href="#Instagram" className="contacto">
    //         <span className="fa fa-instagram" aria-hidden="true">
    //           {" "}
    //           @mintur_camaguey
    //         </span>
    //       </a>
    //     </div>
    //     <div
    //       ref={ref}
    //       className={`groupB ${
    //         inView ? "animate__animated animate__flipInX animate__delay-1s" : ""
    //       }`}
    //     >
    //       <a href="#Telegram" className="contacto">
    //         <span className="fa fa-telegram" aria-hidden="true">
    //           {" "}
    //           @mintur_empresa
    //         </span>
    //       </a>
    //       <a href="#WhatsApp" className="contacto">
    //         <span className="fa fa-whatsapp" aria-hidden="true">
    //           {" "}
    //           @mintur
    //         </span>
    //       </a>
    //       <a href="#TrivAdvisor" className="contacto">
    //         <span className="fa fa-tripadvisor" aria-hidden="true">
    //           {" "}
    //           Mintur, Camagüey
    //         </span>
    //       </a>
    //       <a href="#Email" className="contacto">
    //         <span className="fa fa-envelope-o" aria-hidden="true">
    //           {" "}
    //           mintur.camaguey@gmail.com
    //         </span>
    //       </a>
    //     </div>
    //     <div
    //       ref={ref}
    //       className={`groupC ${
    //         inView ? "animate__animated animate__flipInX animate__delay-2s" : ""
    //       }`}
    //     >
    //       <a href="#Location" className="contacto">
    //         <span className="fa fa-map-marker" aria-hidden="true">
    //           {" "}
    //           Calle tal, E/ 1ra y 2da No. 23
    //         </span>
    //       </a>
    //       <p className="contacto">
    //         <span className="fa fa-phone" aria-hidden="true">
    //           {" "}
    //           +53 5555 5555
    //         </span>
    //       </p>
    //     </div>
    //   </div>

    //   <nav className="pie"></nav>
    // </footer>
  );
};

export default Footer;
