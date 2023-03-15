import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { institOptions, routeNames } from "./listedItems";
import { Alert, Slide, Snackbar, useScrollTrigger } from "@mui/material";
import img from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import { Public } from "@mui/icons-material";

//Hiding functionality for the App bar
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    window: PropTypes.func,
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

//Slide Animation for the snackbar
function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

//Main Component
export default function ResponsiveAppBar(props) {
  const message = "Esta funcionalidad aún no está implementada";

  const [anchorElNav, setAnchorElNav] = React.useState(null); //Elements in the AppBar
  const [anchorElInst, setAnchorElInst] = React.useState(null); //Elements in the Institutions Menu

  //SnackBars
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  //Elements in the AppBar
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //Elements in the Institutions Menu
  const handleOpenUserMenu = (event) => {
    setAnchorElInst(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElInst(null);
  };


  //Snackbars
  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Logo's Responsive's Container  */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  marginY: "10px",
                  mr: 1,
                }}
                >
                  <Link to="/">
                  <img src={img} alt="Logo" />
                </Link>
              </Box>
              
              {/* Phone View Responsive's Container */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                  >
                  {routeNames.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Link to={page} style={{ textDecoration: "none" }}>
                        <Typography textAlign="center" color="black">
                          {page}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}

                  <MenuItem>
                    <Tooltip title="Instituciones Mintur">
                      <Button
                        onClick={handleOpenUserMenu}
                        sx={{ color: "black" }}
                        >
                        <Typography textAlign="center">
                          Instituciones
                        </Typography>
                      </Button>
                    </Tooltip>
                  </MenuItem>

                  <MenuItem>
                    <IconButton
                      aria-label="facebook"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                      >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton
                      aria-label="twitter"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                      >
                      <TwitterIcon />
                    </IconButton>
                    <IconButton
                      aria-label="instagram"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                      >
                      <InstagramIcon />
                    </IconButton>
                  </MenuItem>
                </Menu>
              </Box>

              {/* Logo's Responsive's Container  */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  marginY: "10px",
                }}
              >
                <Link to="/">
                  <img src={img} alt="Logo" />
                </Link>
              </Box>

              {/* Links Desktop View's Responsive Container */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {routeNames.map((page) => (
                  <Link to={page} style={{ textDecoration: "none" }}>

                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}

                {/* Institutions Desktop View's Responsive Container */}
                <Tooltip title="Instituciones Mintur">
                  <Button
                    onClick={handleOpenUserMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Instituciones
                  </Button>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElInst}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElInst)}
                  onClose={handleCloseUserMenu}
                >
                  {institOptions.map((option) => (
                    <MenuItem
                      key={option}
                      onClick={handleCloseUserMenu}
                      sx={{ color: "black" }}
                    >
                      <Typography textAlign="center" variant="button">
                        <Link
                          to={option}
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          {option}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
                  
              {/* Change Language button's unimplemented prompt message */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Cambiar Lenguaje">
                  <IconButton
                    onClick={handleClick(TransitionRight)}
                    sx={{ p: 0 }}
                  >
                    <Public alt="Lenguage" sx={{ color: "white" }} />
                  </IconButton>
                </Tooltip>
                <Snackbar
                  open={open}
                  onClose={handleClose}
                  autoHideDuration={5000}
                  TransitionComponent={transition}
                  key={transition ? transition.name : ""}
                >
                  <Alert
                    onClose={handleClose}
                    severity="info"
                    sx={{ width: "100%" }}
                  >
                    {message}
                  </Alert>
                </Snackbar>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
