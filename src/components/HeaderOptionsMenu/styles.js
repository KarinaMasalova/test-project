import { menuItemHeight, colorSecondary } from '../../constants/constants';

const getMenuStyles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '10%'
    },
    style: {
        maxHeight: menuItemHeight * 4.5,
        width: '20ch'
    },
    icon: {
        width: '42px',
        height: '42px',
        margin: '2px 10px',
        backgroundColor: colorSecondary,
        '&:hover': {
            backgroundColor: colorSecondary,
            opacity: 0.5,
            border: '1px lightgray solid'
        }
    }
});

export default getMenuStyles;
