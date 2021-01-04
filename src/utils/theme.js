import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function getTheme() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = createMuiTheme({
        palette: {
            type: prefersDarkMode ? 'dark' : 'light',
        },
    });

    return theme;
}
