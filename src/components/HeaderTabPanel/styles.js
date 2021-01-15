import { colorPrimary } from "../../constants/constants";

const getTabPanelStyles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        minWidth: 1024,
        width: '80%',
    },
    tabs: {
        color: colorPrimary,
    }
});

export default getTabPanelStyles;