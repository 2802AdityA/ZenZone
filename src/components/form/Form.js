import React from 'react'
import useStyles from './FormStyle.js';
import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography, Container, Grid, RadioGroup, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import { Button } from '@mui/material';
import axios from 'axios';
import Output from '../../pages/Output.js';
import { Router, Route, Link } from 'react-router-dom';


const Form = () => {
  const classes = useStyles();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [familyHistory, setFamilyHistory] = useState();
  const [benefits, setBenefits] = useState();
  const [careOptions, setCareOptions] = useState();
  const [anonymity, setAnonymity] = useState();
  const [leave, setLeave] = useState();
  const [workInterfere, setWorkInterfere] = useState();
  const [output, setOutput] = useState();
  const handleAge = (event) => {
    setAge(event.target.value);
  }
  const handleGender = (event) => {
    setGender(event.target.value);
  }
  const handleFamilyHistory = (event) => {
    setFamilyHistory(event.target.value);
  }
  const handleBenefits = (event) => {
    setBenefits(event.target.value);
  }
  const handleCareOptions = (event) => {
    setCareOptions(event.target.value);
  }
  const handleAnonymity = (event) => {
    setAnonymity(event.target.value);
  }
  const handleLeave = (event) => {
    setLeave(event.target.value);
  }
  const handleWorkInterfere = (event) => {
    setWorkInterfere(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a data object to send in the POST request
    // const data = {
    //   age: age,
    //   gender: gender,
    //   familyHistory: familyHistory,
    //   benefits: benefits,
    //   careOptions: careOptions,
    //   anonymity: anonymity,
    //   leave: leave,
    //   workInterfere: workInterfere
    // };
    const fD = new FormData();
    fD.append('age', age);
    fD.append('gender', gender);
    fD.append('familyHistory', familyHistory);
    fD.append('benefits', benefits);
    fD.append('careOptions', careOptions);
    fD.append('anonymity', anonymity);
    fD.append('leave', leave);
    fD.append('workInterfere', workInterfere);


    // Send a POST request to the server
    axios.post('/predict', fD)
      .then(response => {
        console.log(response.data.output)
        // Handle the response from the server
        setOutput(response.data.output);
      })
      .catch(error => {
        // Handle errors that occur during the request
        console.log(error);
      });
    return (
      <div>

        <Link to="/output">Go to Target Page</Link>
        <Router>
          <Route path="/output">
            <Output value={output} />
          </Route>
        </Router>
      </div>);
  };


  return (
    <form onSubmit={handleSubmit}>

      <div className={classes.formContainer}>
        <Container>
          <h1 className={classes.formHeading}>Form</h1>

          <Grid container spacing={2} className={classes.inputContainer}>


            <Grid item xs={12} sm={12} lg={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={2}>
                  <Typography className={classes.formLabel}>Age</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={10}>
                  <TextField onChange={handleAge} value={age} label="Age" />
                  {/* <FormControlLabel control={<TextField label="Age" />} /> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={2}>
                  <Typography className={classes.formLabel}>Gender</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={10}>

                  <RadioGroup onChange={handleGender} value={gender}>

                    <FormControlLabel value={1} control={<Radio />} name="gender" label="Male" />
                    <FormControlLabel value={0} control={<Radio />} name="gender" label="Female" />
                    <FormControlLabel value={2} control={<Radio />} name="gender" label="Trans" />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={2}>
                  <Typography className={classes.formLabel}>Family History</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={10}>
                  <RadioGroup onChange={handleFamilyHistory} value={familyHistory}>

                    <FormControlLabel value={1} control={<Radio />} name="family-history" label="Yes" />
                    <FormControlLabel value={0} control={<Radio />} name="family-history" label="No" />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={2}>
                  <Typography className={classes.formLabel}>Benefits</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={10}>
                  <RadioGroup onChange={handleBenefits} value={benefits}>

                    <FormControlLabel value={0} control={<Radio />} label="Don't Know" />
                    <FormControlLabel value={1} control={<Radio />} label="No" />
                    <FormControlLabel value={2} control={<Radio />} label="Yes" />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={2}>
                  <Typography className={classes.formLabel}>Care Options</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={10}>
                  <RadioGroup onChange={handleCareOptions} value={careOptions}>

                    <FormControlLabel value={1} control={<Radio />} label="Not Sure" />
                    <FormControlLabel value={0} control={<Radio />} label="No" />
                    <FormControlLabel value={2} control={<Radio />} label="Yes" />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={2}>
                  <Typography className={classes.formLabel}>Anonymity</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={10}>
                  <RadioGroup onChange={handleAnonymity} value={anonymity}>

                    <FormControlLabel value={0} control={<Radio />} label="Don't Know" />
                    <FormControlLabel value={1} control={<Radio />} label="No" />
                    <FormControlLabel value={2} control={<Radio />} label="Yes" />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={2}>
                  <Typography className={classes.formLabel}>Leave</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={10}>
                  <RadioGroup onChange={handleLeave} value={leave}>

                    <FormControlLabel value={0} control={<Radio />} label="Don't Know" />
                    <FormControlLabel value={1} control={<Radio />} label="Somewhat Difficult" />
                    <FormControlLabel value={2} control={<Radio />} label="Somewhat Easy" />
                    <FormControlLabel value={4} control={<Radio />} label="Very Easy" />
                    <FormControlLabel value={3} control={<Radio />} label="Very Difficult" />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={2}>
                  <Typography className={classes.formLabel}>Work Interfere</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={10}>
                  <RadioGroup onChange={handleWorkInterfere} value={workInterfere}>
                    <FormControlLabel value={0} control={<Radio />} label="Don't Know" />
                    <FormControlLabel value={1} control={<Radio />} label="Never" />
                    <FormControlLabel value={2} control={<Radio />} label="Often" />
                    <FormControlLabel value={3} control={<Radio />} label="Rarely" />
                    <FormControlLabel value={4} control={<Radio />} label="Sometimes" />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
            <Button variant="contained" type="submit">Submit</Button>
          </Grid>
        </Container>
      </div>
    </form>
  )
}

export default Form;