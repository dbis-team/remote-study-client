import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';

import { LOGIN_PATH } from 'constants/routes';

const EmailVerification: React.FC = () => {
  const history = useHistory();
  React.useEffect(() => {
    setTimeout(() => {
      history.push(`${LOGIN_PATH}?confirmation=success`);
    }, 5000);
  }, [history]);

  return (
    <Box style={{ textAlign: 'center' }}>
      <Typography variant="h2">You&apos;ll be redirected soon to login page...</Typography>
    </Box>
  );
};

export default EmailVerification;
