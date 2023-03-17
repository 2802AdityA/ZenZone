import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    section: {
        backgroundColor: '#f5f7f5',
        padding: '50px 20px 200px 20px',
    },
    content:{
        marginLeft: '20px',
        padding:"0px",
        fontWeight: '700',
        fontSize: '25px',
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "100px",
    },

    heading: {
        textAlign: 'center',
        fontFamily: 'Overpass, sans-serif',
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