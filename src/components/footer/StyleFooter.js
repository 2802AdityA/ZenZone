import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#f5f7f5",
        padding: "3rem 2rem",
        position: "sticky",
        bottom: "0",
        width: "100%",
        fontFamily: "Roboto,sans-serif",
    },
    footerHeader: {
        fontSize: "1.5rem",
        marginBottom: "1rem",
        color: "#252625",
    },
    footerLinkHeader: {
        textAlign: "center",
        color: "#252625",
        fontSize: "1.5rem",
        marginBottom: "1rem",
    },
    footerLinkUL: {
        textAlign: "center",
        listStyle: "none",
        padding: "0",
        marginTop: "20px",
        color: "#252625",
        opacity: "0.8",
    },
    footerLinkLI: {
        color: "#000",
        fontSize: "1rem",
        marginBottom: "1rem",
        "&:hover": {
            color: "#000",
            textDecoration: "underline",
        },
        cursor: "pointer",
    },
    footerIcon: {
        color: "#252625",
        fontSize: "2rem",
        marginRight: "0.7rem",
        marginTop: "1rem",
        "&:hover": {
            color: "#000",
            cursor: "pointer",
        },
    }
}));

export default useStyles;