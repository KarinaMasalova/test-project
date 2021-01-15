import { lighten } from '@material-ui/core/styles';
import { colorPrimary } from '../../constants/constants';

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
  tableCellName: {
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
    width: '100%',
    padding: theme.spacing(3),
  },
  highlight: {
    color: theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.text.primary,
    backgroundColor: theme.palette.type === 'light' ? lighten(colorPrimary, 0.5) : colorPrimary,
    justifyContent: 'space-between',
  },
  addIcon: {
    color: colorPrimary,
    width: '20px',
    height: '20px',
  },
});

export { getPeopleTableStyles, getToolbarStyles };
