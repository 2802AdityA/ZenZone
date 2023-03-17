import React from 'react'
import useStyles from './StyleOverview.js';
import Grid from '@mui/material/Grid';
import { Container, Typography, Button } from '@mui/material';
import IMG from "../../assets/overview.png";


export default function Overview() {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container>
        <Grid container spacing={12}>
          <Grid item xs={12} md={6} lg={6}>
            <h4 className={classes.overviewHeading}>
              Professional, licensed, and vetted therapists who you can trust
            </h4>
            <p className={classes.overviewContent}>
              Tap into the world's largest network of licensed, accredited, and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. With our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate when and how you want.
            </p>
            <button className={classes.overviewButton}>Get Matched to a therapist</button>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <img src={IMG} alt="overview" className={classes.overviewImage} />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
