import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const Alert = (props: AlertProps) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

interface IProps {
  open: boolean;
  autoHideDuration?: number | null;
  severity: AlertProps['severity'];
  feedbackMessage: string;
  clearFeedback: () => void;
  displayInTheMiddle?: boolean;
}

export type FeedbackerSeverity = AlertProps['severity'];

const Feedbacker: React.FC<IProps> = ({
  open,
  autoHideDuration,
  severity,
  feedbackMessage,
  clearFeedback,
}) => {
  const handleAlertClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    clearFeedback();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleAlertClose}
    >
      <Alert onClose={handleAlertClose} severity={severity}>
        {feedbackMessage}
      </Alert>
    </Snackbar>
  );
};

export { Feedbacker };
