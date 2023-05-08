import { Box, Typography } from "@mui/material";
import React from "react";

const Palmares = () => {
  return (
    <>
      <Box padding="30px">
        <Typography variant="h3"> Palmares </Typography>
        <br />
        <Typography variant="body1" textAlign="justify" fontSize="25px">
          Empresa Extrahotelera Palmares S.A. Camagüey ofrece al turismo
          camagüeyano e internacional un sin número de ofertas en servicios
          recreativos y gastronómicos, donde pone al alcance de sus clientes la
          historia, la cultura y la naturaleza del territorio. Entre sus líneas
          de negocios destacan los productos de naturaleza, el turismo
          deportivo, el arte y entretenimiento, la restauración, centros de
          eventos y convenciones, establecimientos de comidas rápidas,
          franquicias de importantes marcas cubanas, alojamiento y el comercio
          especializado, entre otros. La Empresa Extrahotelera Palmares S.A.
          administra un grupo de establecimientos que cuentan con una importante
          demanda, entre ellos destacan las Fincas Campesinas donde se puede
          disfrutar de un paseo a caballo, conocer la cultura campesina y
          participar en una fiesta guajira, entre muchas otras opciones.
        </Typography>
      </Box>
    </>
  );
};

export default Palmares;
