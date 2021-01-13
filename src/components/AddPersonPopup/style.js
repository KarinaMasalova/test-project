import { colorSecondary, boxShadow } from "../../constants/constants";

const getAddPersonPopupStyles = () => ({
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
        padding: '20px',
        backgroundColor: 'transparent',
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
            width: '6px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'lightgray',
            borderRadius: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '5px',
            backgroundColor: 'red',
        },
    },
    popupTitle: {
        color: colorSecondary,
        fontSize: '14px',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
});

export default getAddPersonPopupStyles;
