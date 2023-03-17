import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    overall: {
        backrgroundColor:"#325343",
        color:"white",
        fontFamily:"Roboto,sans-serif",
        paddingRight:"100px",        
    },
    heading: {
        fontFamily:"Roboto,sans-serif",
        fontSize: "2rem",
        paddingTop:"200px",
    },

    subheading: {
        fontFamily:"Roboto,sans-serif",
        marginTop:"40px",
        fontSize: "1.5rem",
        lineHeight:"1.5",
    },
}));

export default useStyles;
