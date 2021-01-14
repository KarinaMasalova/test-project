import { lighten } from '@material-ui/core/styles';
import { colorPrimary, textShadowColor } from '../../constants/constants';

const getPeopleTableStyles = (theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
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
  addIcon: {
    color: colorPrimary,
    width: '20px',
    height: '20px',
    marginRight: '20px',
    '&:hover': {
      opacity: 0.5,
      cursor: 'pointer'
    }
  },
  addIconText: {
    color: colorPrimary,
    width: '10%',
  }
});

export { getPeopleTableStyles, getToolbarStyles };
