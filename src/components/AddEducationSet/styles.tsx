import { purple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  color: {
    backgroundColor: purple[500],
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}));
