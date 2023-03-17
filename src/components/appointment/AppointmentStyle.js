import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    cardSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& > div': {
            width: '30%',
            height: '300px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '& > img': {
                width: '80%',
                objectFit: 'cover',
                borderRadius: '50%',
                cursor: 'pointer'
            },
            '& > h3': {
                marginTop: '20px',
                fontSize: '1.5rem',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 'lighter'
            }
        }
    }
}));

export default useStyles;