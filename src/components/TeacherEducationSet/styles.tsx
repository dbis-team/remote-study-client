import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  rootBox: { 
    flexWrap: 'wrap', 
    maxWidth: '90%',
  },
  margin: {
    marginRight: theme.spacing(1),
  },
  oneThird: {
    maxWidth: '33%'
  },
  half: {
    width: '50%'
  }
}));
