const getPopupFormStyles = () => ({
    formControl: {
        width: '100%',
        textAlign: 'left',
        margin: '8px 0 16px 0',
        '& > .MuiFormControl-root > .MuiFormLabel-root': {
            fontSize: '12px'
        },
        '& > .MuiFormLabel-root': {
            fontSize: '12px'
        },
    },
    oneButton: {
        textAlign: 'right',
        marginLeft: '10px',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '20px 0'
    }
});

export default getPopupFormStyles;
