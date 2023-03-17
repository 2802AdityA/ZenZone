import React from 'react';
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Paper } from '@mui/material';
import Container from '@mui/material/Container';
import useStyles from './Servicecss';
import card1 from '../../assets/card-image-1.png';
import card2 from '../../assets/card-image-2.png';
import card3 from '../../assets/card-image-3.png';
import divider from '../../assets/divider.png';

const cardsData = [
    {
        image: card1,
        content: 'Find if you are depressed or not',
        route: '/form'
    },
    {
        image: card2,
        content: 'Look for counsellors near you',
        route: '/find-counsellors'
    },
    {
        image: card3,
        content: 'Engage in a fun activity to relieve your stress',
        route: '/fun-activity'
    },
];



function Cards() {
    const classes = useStyles();
    let navigate = useNavigate();

    const handleCardClick = (route) => {
        navigate(route);
    };

    return (
        <>
        <img src={divider} alt="divider" className={classes.divider}></img>
            <div className={classes.section}>
                <Container >
                    <Typography variant="h3" gutterBottom className={classes.heading}>
                        Our Services
                    </Typography>
                    <Grid container spacing={3}>
                        {cardsData.map((card) => (
                            <Grid item key={card.image} xs={12} sm={4}>
                                <Paper
                                    className={classes.card}
                                    elevation={6}
                                    style={{ backgroundImage: `url(${card.image})` }}
                                    onClick={() => handleCardClick(card.route)}
                                >
                                    <h5 className={classes.content}>
                                        {card.content}
                                    </h5>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Cards;
