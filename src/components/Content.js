import { Box, Typography } from "@mui/material";
import React from "react";

export const Content = ({ name }, { text }) => {

  return (
    <Box padding="30px">
      <Typography variant="h3"> {name} </Typography>
      <br />
      <Typography variant="body1" textAlign="justify" fontSize="25px">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eveniet
        voluptatibus deleniti alias officiis, nam eligendi explicabo maxime modi
        eaque doloribus sit tempore incidunt necessitatibus exercitationem
        recusandae dicta, officia voluptatum!
      </Typography>
    </Box>
  );
};
