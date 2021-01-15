import { colorPrimary } from '../../constants/constants';

const getFiltersBlockStyles = (theme) => ({
    root: {
        padding: '5px',
        marginBottom: '20px',
        border: `1px gray solid`,
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    headline: {
        color: colorPrimary,
        fontSize: '20px',
        padding: '15px',
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
    },
    resetButton: {
        textAlign: 'right',
        margin: theme.spacing(1),
        marginBottom: '20px',
    },
});

export default getFiltersBlockStyles;
