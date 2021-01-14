import { colorSecondary, boxShadow } from "../../constants/constants";

const getAddPersonPopupStyles = (theme) => ({
    overlay: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)',
        zIndex: 1000,
    },
    popup: {
        backgroundColor: theme.palette.background.paper,
        minWidth: '40%',
        maxWidth: '55%',
        padding: '20px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        maxHeight: '80vh',
        borderRadius: '5px',
        boxShadow: boxShadow,
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '2px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'lightgray',
            borderRadius: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '5px',
            backgroundColor: colorSecondary,
        },
    },
    popupTitle: {
        color: colorSecondary,
        fontSize: '14px',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    button: {
        textAlign: 'right',
        marginLeft: '10px',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
});

export default getAddPersonPopupStyles;
