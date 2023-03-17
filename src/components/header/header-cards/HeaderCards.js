import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useStyles from './Headercss';
import img from "./headerimage.png"
import Navbar from "../navbar/Navbar"

export default function HeaderCards() {
  const classes = useStyles();

  return (
    <>
    <Navbar/>
    <Box sx={{ flexGrow: 1 , backgroundColor:"#325343"}} className={classes.overall}>
      <Grid container spacing={2}>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          <img src={img} sx={{ maxWidth: "100%" }} alt='random' />
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <p className={classes.heading}>
            You Deserve To Be Happy :)
          </p>
          <p className={classes.subheading}>
            What are you waiting for ? Go thorugh the page and find the things that interests you!
          </p>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}