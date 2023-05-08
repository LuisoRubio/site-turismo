import { Box, Typography } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <>
      <Box padding="30px">
        <Typography variant="h3"> Servicios </Typography>
        <br />
        <Typography variant="body1" textAlign="justify" fontSize="25px">
          El Ministerio de Turismo MINTUR en la provincia de Camagüey organiza
          instalaciones pertenecientes a las cadenas Cubanacán, Islazul y
          Campismo Los servicios turísticos se pueden dividir en tres grandes
          grupos de servicios: hospedaje, alimentación y transporte, además del
          servicio de las agencias de viajes que pueden ayudar a los viajeros a
          organizar y contratar todos o sólo algunos de esos servicios.
        </Typography>
      </Box>
    </>
  );
};

export default Services;
