import React from 'react'
import useStyles from './FormStyle.js';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography, Container, Grid } from '@mui/material';
import Radio from '@mui/material/Radio';
const Form = () => {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <Container>
        <h1 className={classes.formHeading}>Form</h1>

        <Grid container spacing={2} className={classes.inputContainer}>
          
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Family History</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Radio  />} label="Yes" />
                <FormControlLabel control={<Radio />} label="No" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Gender</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel value={1} control={<Radio />} label="Male" />
                <FormControlLabel value={0} control={<Radio />} label="Female" />
                <FormControlLabel value={2} control={<Radio />} label="Trans" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Work Interfere</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Radio  />} label="Don't Know" />
                <FormControlLabel control={<Radio />} label="Never" />
                <FormControlLabel control={<Radio />} label="Often" />
                <FormControlLabel control={<Radio />} label="Rarely" />
                <FormControlLabel control={<Radio />} label="Sometimes" />
              </Grid>
            </Grid>
          </Grid>
          
          
          
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Benefits</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Radio  />} label="Don't Know" />
                <FormControlLabel control={<Radio />} label="No" />
                <FormControlLabel control={<Radio />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Care Options</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Radio  />} label="Not Sure" />
                <FormControlLabel control={<Radio />} label="No" />
                <FormControlLabel control={<Radio />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          
          
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Anonymity</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Radio  />} label="Don't Know" />
                <FormControlLabel control={<Radio />} label="No" />
                <FormControlLabel control={<Radio />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Leave</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Radio  />} label="Don't Know" />
                <FormControlLabel control={<Radio />} label="Somewhat Difficult" />
                <FormControlLabel control={<Radio />} label="Somewhat Easy" />
                <FormControlLabel control={<Radio />} label="Very Easy" />
                <FormControlLabel control={<Radio />} label="Very Difficult" />
              </Grid>
            </Grid>
          </Grid>
          
          
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Age Range</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Radio  />} label="0-20" />
                <FormControlLabel control={<Radio />} label="21-30" />
                <FormControlLabel control={<Radio />} label="31-65" />
                <FormControlLabel control={<Radio />} label="66-100" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Form;