import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'block'
  },
  dropContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    width: 800,
    height: 200,
    border: '4px dashed #4aa1f3'
  },
  dropMessage: {
    textAlign: 'center',
    color: '#4aa1f3',
    fontFamily: 'Arial',
    fontSize: 20
  }
}));

export { useStyles };
