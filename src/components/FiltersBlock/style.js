import { colorSecondary } from '../../constants/constants';

const getFiltersBlockStyles = (theme) => ({
    root: {
        padding: '5px',
        marginBottom: '20px',
        border: '1px lightgray solid',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    headline: {
        color: colorSecondary,
        fontSize: '20px',
        fontWeight: '600',
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
        padding: '5px 10px'
    },
    filters: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%'
    },
    formControl: {
        margin: theme.spacing(1),
        width: '23%',
        '& > .MuiFormControl-root > .MuiFormLabel-root': {
            fontSize: '12px'
        },
        '& > .MuiFormLabel-root': {
            fontSize: '12px'
        },
    },
    resetButton: {
        textAlign: 'right',
        margin: theme.spacing(1),
        marginBottom: '20px'
    },
});

export default getFiltersBlockStyles;
