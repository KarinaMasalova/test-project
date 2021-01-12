import { lighten } from '@material-ui/core/styles';
import * as constants from '../../constants/constants';

const getPeopleTableStyles = (theme) => ({
  root: {
    width: '100%',
    boxShadow: `${constants.boxShadow}`,
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
    '&::-webkit-scrollbar': {
      height: '1px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(0,0,0,0.1)',
      borderRadius: '5px'
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '5px',
      backgroundColor: `${constants.colorSecondary}`
    }
  },
  tableCellFirstname: {
    paddingLeft: '18px'
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%'
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
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
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
    textShadow: `${constants.textShadowColor} 1px 0 10px`,
  },
});

export { getPeopleTableStyles, getToolbarStyles };
