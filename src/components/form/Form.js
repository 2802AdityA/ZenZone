import React from 'react'
import useStyles from './FormStyle.js';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography, Container, Grid } from '@mui/material';

const Form = () => {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <Container>
        <h1 className={classes.formHeading}>Form</h1>
        {/* <div>
          <Typography>Self Employed?</Typography>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Yes" />
          <FormControlLabel control={<Checkbox />} label="No" />
        </div> */}
        <Grid container spacing={2} className={classes.inputContainer}>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Self Employed?</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Yes" />
                <FormControlLabel control={<Checkbox />} label="No" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Family History</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Yes" />
                <FormControlLabel control={<Checkbox />} label="No" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Treatment</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Yes" />
                <FormControlLabel control={<Checkbox />} label="No" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Work Interfere</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Don't Know" />
                <FormControlLabel control={<Checkbox />} label="Never" />
                <FormControlLabel control={<Checkbox />} label="Often" />
                <FormControlLabel control={<Checkbox />} label="Rarely" />
                <FormControlLabel control={<Checkbox />} label="Sometimes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>No. of Employees</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="1-5" />
                <FormControlLabel control={<Checkbox />} label="100-500" />
                <FormControlLabel control={<Checkbox />} label="26-100" />
                <FormControlLabel control={<Checkbox />} label="500-1000" />
                <FormControlLabel control={<Checkbox />} label="6-25" />
                <FormControlLabel control={<Checkbox />} label="More than 1000" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Remote Work</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Yes" />
                <FormControlLabel control={<Checkbox />} label="No" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Tech Company</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Yes" />
                <FormControlLabel control={<Checkbox />} label="No" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Benefits</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Don't Know" />
                <FormControlLabel control={<Checkbox />} label="No" />
                <FormControlLabel control={<Checkbox />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Care Options</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Not Sure" />
                <FormControlLabel control={<Checkbox />} label="No" />
                <FormControlLabel control={<Checkbox />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Wellness Program</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Don't Know" />
                <FormControlLabel control={<Checkbox />} label="No" />
                <FormControlLabel control={<Checkbox />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Seek Help</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Don't Know" />
                <FormControlLabel control={<Checkbox />} label="No" />
                <FormControlLabel control={<Checkbox />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Anonymity</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Don't Know" />
                <FormControlLabel control={<Checkbox />} label="No" />
                <FormControlLabel control={<Checkbox />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Leave</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Don't Know" />
                <FormControlLabel control={<Checkbox />} label="Somewhat Difficult" />
                <FormControlLabel control={<Checkbox />} label="Somewhat Easy" />
                <FormControlLabel control={<Checkbox />} label="Very Easy" />
                <FormControlLabel control={<Checkbox />} label="Very Difficult" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Mental Health Consequences</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Maybe" />
                <FormControlLabel control={<Checkbox />} label="No" />
                <FormControlLabel control={<Checkbox />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Physical Health Consequences</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Maybe" />
                <FormControlLabel control={<Checkbox />} label="No" />
                <FormControlLabel control={<Checkbox />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Coworkers</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="No" />
                <FormControlLabel control={<Checkbox />} label="Some of them" />
                <FormControlLabel control={<Checkbox />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Label Supervisor</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="No" />
                <FormControlLabel control={<Checkbox />} label="Some of them" />
                <FormControlLabel control={<Checkbox />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Mental Health Interview</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Maybe" />
                <FormControlLabel control={<Checkbox />} label="No" />
                <FormControlLabel control={<Checkbox />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Physical Health Interview</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Maybe" />
                <FormControlLabel control={<Checkbox />} label="No" />
                <FormControlLabel control={<Checkbox />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Mental vs Physical</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Don't Know" />
                <FormControlLabel control={<Checkbox />} label="No" />
                <FormControlLabel control={<Checkbox />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Obs Consequence</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="No" />
                <FormControlLabel control={<Checkbox />} label="Yes" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={2}>
                <Typography className={classes.formLabel}>Age Range</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={10}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="0-20" />
                <FormControlLabel control={<Checkbox />} label="21-30" />
                <FormControlLabel control={<Checkbox />} label="31-65" />
                <FormControlLabel control={<Checkbox />} label="66-100" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Form;