import React from 'react'
import useStyles from './StyleFooter.js';
import Grid from '@mui/material/Grid';
import { Container, Typography, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Footer() {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <Grid container spacing={12}>
          <Grid item xs={12} md={12} lg={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom className={classes.footerHeader}>
              ZenZone
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Therapy is one of the most meaningful gifts you can give to your friends and loved ones. Tap into the world's largest network of licensed, accredited, and experienced therapy platform.
            </Typography>
            <FacebookIcon className={classes.footerIcon} />
            <LinkedInIcon className={classes.footerIcon} />
            <TwitterIcon className={classes.footerIcon} />
            <InstagramIcon className={classes.footerIcon} />
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom className={classes.footerLinkHeader}>
              Quick Links
            </Typography>
            <ul className={classes.footerLinkUL}>
              <li className={classes.footerLinkLI}>Home</li>
              <li className={classes.footerLinkLI}>About</li>
              <li className={classes.footerLinkLI}>FAQ</li>
              <li className={classes.footerLinkLI}>Contact</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom className={classes.footerLinkHeader}>
              Important Links
            </Typography>
            <ul className={classes.footerLinkUL}>
              <li className={classes.footerLinkLI}>Terms & Conditions</li>
              <li className={classes.footerLinkLI}>Privacy Policy</li>
              <li className={classes.footerLinkLI}>Cookie Settings</li>
              <li className={classes.footerLinkLI}>Careers</li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </div >
  )
}