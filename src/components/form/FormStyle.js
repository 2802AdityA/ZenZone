import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    formContainer: {
        padding: "5rem",
        width: "100%",
        height: "100%",
        backgroundColor: "#f5f5f5",
    },
    formHeading: {
        textAlign: "center",
        marginBottom: "2rem",
        fontFamily: "Roboto, sans-serif",
        fontWeight: "lighter",
    },
    inputContainer: {
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "5px",
    },
    formLabel: {
        fontSize: "1.2rem",
        fontFamily: "Roboto, sans-serif",
        fontWeight: "lighter",
    },
}));

export default useStyles;