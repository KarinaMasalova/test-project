const ITEM_HEIGHT = 48;

const getMenuStyles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '10%'
    },
    style: {
        maxHeight: ITEM_HEIGHT * 4.5,
        width: '20ch'
    },
});

export default getMenuStyles;