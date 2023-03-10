import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import "animate.css";

const gridStyle = {
  margin: "30px",
  borderRadius: "16px",
  boxShadow: 3 
};

const Organigram = () => {
  return (
    <>
      <Grid
        container
        alignItems="stretch"
        padding="40px"
        sx={{ display: { md: "flex", xs: "none" } }}
        className="animate__animated animate__backInUp"
      >
        <Grid item component={Card} xs sx={{ ...gridStyle }}>
          <CardContent sx={{ minWidth: 275 }}>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Misión
            </Typography>
            <br />
            <Typography variant="body1" component="div" textAlign="justify">
              Convertir a Cuba en un destino sostenible y competitivo, líder en
              Latinoamérica en un nuevo modo de hacer turismo, más natural, más
              sostenible, más inclusivo y sobre todo, más beneficioso tanto para
              turistas como para comunidades residentes, garantizando en todo
              momento la protección del ambiente, las poblaciones locales y del
              turista como consumidor.
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs sx={{ ...gridStyle }}>
          <CardContent sx={{ minWidth: 275 }}>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Visión
            </Typography>
            <br />
            <Typography variant="body1" component="div" textAlign="justify">
              Convertir a Cuba en el destino turístico pionero en Latinoamérica
              en la nueva era del turismo.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="stretch"
        padding="40px"
        sx={{ display: { xs: "flex", md: "none" } }}
        className="animate__animated animate__backInUp"
      >
        <Grid item component={Card} sx={{ ...gridStyle }}>
          <CardContent sx={{ minWidth: 275 }}>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Misión
            </Typography>
            <br />
            <Typography variant="body1" component="div" textAlign="justify">
              Convertir a Cuba en un destino sostenible y competitivo, líder en
              Latinoamérica en un nuevo modo de hacer turismo, más natural, más
              sostenible, más inclusivo y sobre todo, más beneficioso tanto para
              turistas como para comunidades residentes, garantizando en todo
              momento la protección del ambiente, las poblaciones locales y del
              turista como consumidor.
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} sx={{ ...gridStyle }}>
          <CardContent sx={{ minWidth: 275 }}>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Visión
            </Typography>
            <br />
            <Typography variant="body1" component="div" textAlign="justify">
              Convertir a Cuba en el destino turístico pionero en Latinoamérica
              en la nueva era del turismo.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
};

export default Organigram;
