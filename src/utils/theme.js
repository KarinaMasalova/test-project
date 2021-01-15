import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { colorPrimary, colorPrimaryRgba } from '../constants/constants';

export default function getTheme() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const local =  JSON.parse(localStorage.getItem('isDarkMode'));
    const dark = local ?? prefersDarkMode; // right operand if left is null or undefined, otherwise returns left operand

    return createMuiTheme({
        palette: {
            type: dark ? 'dark' : 'light',
        },
        overrides: {
            MuiPaper: {
                elevation1: {
                    boxShadow: 'none',
                }
            },
            MuiButton: {
                contained: {
                    borderColor: colorPrimary,
                    backgroundColor: colorPrimary,
                    color: 'white',
                },
                outlined: {
                    color: colorPrimary,
                    borderColor: colorPrimary,
                }
            },
            MuiTypography: {
                colorInherit: {
                    fontSize: '1.5rem',
                },
                h6: {
                    fontSize: '3rem',
                }
            },
            MuiDialogContentText: {
                root: {
                    fontSize: '2.25rem',
                    marginBottom: '30px',
                }
            },
            MuiFormLabel: {
                root: {
                    fontSize: '16px',
                    '&.Mui-focused': {
                        color: colorPrimary,
                    }
                }
            },
            MuiTabs: {
                indicator: {
                    backgroundColor: colorPrimary,
                }
            },
            MuiInputBase: {
                root: {
                    '&.MuiOutlinedInput-root.Mui-focused': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: colorPrimary
                        }
                    }
                },
                input: {
                    height: '1.7em',
                }
            },
            MuiOutlinedInput: {
                input: {
                    padding: '18px 14px',
                    borderColor: colorPrimary
                },
            },
            MuiSwitch: {
                colorSecondary: {
                    '&.Mui-checked': {
                        color: colorPrimary,
                        '& + .MuiSwitch-track': {
                            backgroundColor: colorPrimary,
                        }
                    }
                },
                track: {
                    color: colorPrimary,
                }
            },
            MuiTableCell: {
                root: {
                    fontSize: '1.4rem',
                },
            },
            MuiTableRow: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: colorPrimaryRgba,
                        '&:hover': {
                            backgroundColor: colorPrimaryRgba,
                        }
                    }
                }
            },
            MuiCheckbox: {
                colorSecondary: {
                    '&.Mui-checked': {
                        color: colorPrimary,
                    }
                }
            },
            MuiIconButton: {
                colorSecondary: {
                    '&:hover': {
                        backgroundColor: colorPrimaryRgba,
                    }
                }
            }
        }
    });
}
