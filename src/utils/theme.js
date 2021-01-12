import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function getTheme() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const local =  JSON.parse(localStorage.getItem('isDarkMode'));
    const dark = local ?? prefersDarkMode; // right operand if left is null or undefined, otherwise returns left operand

    return createMuiTheme({
        palette: {
            type: dark ? 'dark' : 'light',
        },
    });
}
