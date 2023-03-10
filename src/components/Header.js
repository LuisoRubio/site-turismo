import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./ButtonAppBar";
import "../styles/index.css";

export default function Header() {
  return (
    <>
      <ResponsiveAppBar />
      <Box id="content" marginTop="90px">
        <Outlet />
      </Box>
    </>
  );
}
