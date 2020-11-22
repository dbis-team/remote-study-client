import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 'auto',
    background: '#daddf1',
    zIndex: theme.zIndex.drawer + 1,
  },
  icon: {
    paddingBottom: '0.9rem',

  },
  copyright: {
    paddingTop: '1.2rem',
    color: '#3f51b5',
  },
}));
