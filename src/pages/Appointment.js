import React from 'react'
import Header from '../components/header/navbar/Navbar'
import { Grid } from '@mui/material'
import IMG1 from '../assets/therapist-4.png'
import useStyles from '../components/therapists/TherapistStyle.js';
import Footer from '../components/footer/Footer'
import AppointmentCard from '../components/appointment/Appointment';

const Appointment = () => {
    const classes = useStyles();
    return (
        <div>
            <Header />
            <div>
                <Grid container spacing={2} style={{marginTop: "2rem", padding: "2rem"}}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Grid container spacing={1}>
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
                    </Grid>
                </Grid>
            </div>
            <div style={{marginTop: "3rem", textAlign: "center"}}>
                <h1 className={classes.Theading}>Find the Best Therapist for You</h1>
            </div>
            <div style={{marginTop: "5rem", padding: "0 10rem", marginBottom: "10rem"}}>
                <AppointmentCard />
            </div>
            <Footer />
        </div>
    )
}

export default Appointment;