import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    Tcontainer: {
        backgroundColor: '#fffcf6;',
        padding: '60px 50px 80px 10px',
    },
    Ttransition: {
        transition: 'all 0.5s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    Timage: {
        width: '100%',
    },
    Tcontent: {
        fontFamily: "Roboto,sans-serif",
        color: "#252625",
        opacity: "0.8",
        marginTop: "1rem",
        marginBottom: "2rem",
        fontSize: "20px",
        lineHeight: "32px",
    },
    Theading: {
        letterSpacing: "-0.02em",
        WebkitFontSmoothing: "antialiased",
        color: "#252625",
        fontFamily: "Roboto,sans-serif",
        fontSize: "2rem",
        fontStyle: "normal",
        fontWeight: "lighter",
        lineHeight: "2.5rem",
        marginTop: "3rem",
    },
    Arrow: {
        display: "flex",
        justifyContent: "center",
        margin: "0 auto 3rem auto",
        width: "10%",
    },
    ArrowSize: {
        width: "30%",
    },
}));

export default useStyles;