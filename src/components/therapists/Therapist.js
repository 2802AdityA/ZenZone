import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import IMG1 from '../../assets/therapist-1.png'
import IMG2 from '../../assets/therapist-2.png'
import IMG3 from '../../assets/therapist-3.png'
import ARROW from '../../assets/down-arrow.png'
import useStyles from './TherapistStyle.js';

export default function Therapist() {
  const classes = useStyles();
  return (
    <div className={classes.Tcontainer}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12} className={classes.Ttransition}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={12} lg={6}>
                <img src={IMG1} alt='therapist' className={classes.Timage}></img>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <h4 className={classes.Theading}>
                  Get matched to the best therapist for you
                </h4>
                <p className={classes.Tcontent}>
                  Answer a few questions to find a licensed therapist who fits your needs and preferences. Tap into the largest network of licensed, professional, board-certified providers.
                </p>
              </Grid>
            </Grid>
            <div className={classes.Arrow}>
              <img src={ARROW} alt='arrow' className={classes.ArrowSize}></img>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={12} className={classes.Ttransition}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={12} lg={6}>
                <img src={IMG3} alt='therapist' className={classes.Timage}></img>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <h4 className={classes.Theading}>
                  Communicate your way
                </h4>
                <p className={classes.Tcontent}>
                  Talk to your therapist however you feel comfortable — text, chat, phone, or video.
                </p>
              </Grid>
            </Grid>
            <div className={classes.Arrow}>
              <img src={ARROW} alt='arrow' className={classes.ArrowSize}></img>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={12} className={classes.Ttransition}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={12} lg={6}>
                <img src={IMG2} alt='therapist' className={classes.Timage}></img>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <h4 className={classes.Theading}>
                  Therapy when you need it
                </h4>
                <p className={classes.Tcontent}>
                  You can message your therapist at anytime, from anywhere. You also get to schedule live sessions when it's convenient for you, and can connect from any mobile device or computer.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
