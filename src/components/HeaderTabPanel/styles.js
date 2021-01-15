import { colorPrimary } from "../../constants/constants";

const getTabPanelStyles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        minWidth: 1024,
        width: '80%',
    },
    tabs: {
        color: colorPrimary,
        '& > .MuiTabs-scroller > .MuiTabs-indicator': {
            backgroundColor: colorPrimary,
        }
    }
});

export default getTabPanelStyles;