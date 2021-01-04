import { lighten } from '@material-ui/core/styles';

const textShadowColor = '#5d0021';
const boxShadow = '0px 0px 23px -1px rgba(0,0,0,0.57)';

const getPlanetsTableStyles = (theme) => ({
  root: {
      width: '100%',
      boxShadow: `${boxShadow}`,
  },
  paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
  },
  table: {
      minWidth: 750,
  },
  visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
  },
});

const getToolbarStyles = (theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
    textShadow: `${textShadowColor} 1px 0 10px`,
  },
});

export { getPlanetsTableStyles, getToolbarStyles };
