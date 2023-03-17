import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    section: {
        width: '100%',
        padding: '50px 200px 150px 200px',
        backgroundColor: "#325343",
    },
    heading: {
        color: "white",
        paddingBottom: "50px",
        fontSize: "2.5rem",
        textAlign: "center",
        fontWeight: "lighter",
        fontFamily: 'Roboto,sans-serif',
    },
    accordian: {
        backgroundColor: "transparent",
    },
    accordianContent: {
        fontWeight: "lighter",
        fontFamily: 'Roboto,sans-serif',
        fontSize: "1.2rem",
        lineHeight: "1.5rem",
    },
    curveImage: {
        width: "100%",
        marginBottom: "-10px",
    },
    curveImage2: {
        width: "100%",
        marginBottom: "-10px",
        rotate: "180deg",
    }
}));

export default useStyles;