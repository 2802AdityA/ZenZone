import React from 'react'
import Img1 from '../../assets/acard-1.jpg'
import Img2 from '../../assets/acard-2.jpeg'
import Img3 from '../../assets/acard3.jpg'
import useStyles from './AppointmentStyle'
import { useNavigate } from "react-router-dom";

const Appointment = () => {

    const classes = useStyles();

    const cardData = [
        {
            image: Img1,
            name: 'Lorem Ipsum'
        },
        {
            image: Img2,
            name: 'Lorem Ipsum'
        },
        {
            image: Img3,
            name: 'Lorem Ipsum'
        }
    ];

    let navigate = useNavigate();


    return (
        <div>
            <div className={classes.cardSection}>
                {cardData.map((card) => (
                    <div key={card.name}>
                        <img src={card.image} alt={card.name} onClick={() => navigate('/video')}/>
                        <h3>{card.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Appointment;