import React from "react";
import SwiperHeader from "./SwiperHeader";
import { Content } from "./Content";
import Footer from "./Footer";
import "../styles/index.css";
import "swiper/css/bundle";
import { Box } from "@mui/material";

const Homepage = () => {
  return (
    <Box component="div" className="padre">
      <Box component="div" className="SlideView">
        <SwiperHeader className="Slider" />
      </Box>
      <Box marginBottom="50px">
        <Content name="Mintur"/>
      </Box>
      <Footer />
    </Box>
  );
};

export default Homepage;
