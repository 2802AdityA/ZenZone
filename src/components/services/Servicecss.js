import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    section: {
        backgroundColor: '#f5f7f5',
        padding: '50px 20px 200px 20px',
    },
    content:{
        // fontWeight: '400',
        fontSize: '25px',
        fontFamily: 'Roboto, sans-serif',
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        padding: "80px",
        cursor: "pointer",
        opacity: "0.8",
    },

    heading: {
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
        paddingBottom: '20px',
        paddingTop: '50px',
    },
    divider: {
        width: '100%',
        marginBottom: '-10px',
        marginTop: '-50px',
    }
}));

export default useStyles;