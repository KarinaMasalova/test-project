import { colorPrimary } from "../../constants/constants";

const getAddPersonPopupStyles = () => ({
    dialogTitle: {
        color: colorPrimary,
        '& > .MuiTypography-h6': {
            fontSize: '3rem'
        },
    },
    description: {
        '& > p': {
            fontSize: '2.25rem',
            marginBottom: '30px',
        },
    },
    button: {
        padding: '10px',
    },
});

export default getAddPersonPopupStyles;
