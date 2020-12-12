import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';

import { LOGIN_PATH } from 'constants/routes';
import { userApiDomainService } from 'services/api/domains/UserApiService';
import { parseSearchParamsToObject } from 'helpers/parseSearchParams';
import { IConfirmEmailPayload } from 'types/entities/user/IConfirmEmailPayload';

const EmailVerification: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    (async () => {
      const searchParams: IConfirmEmailPayload = parseSearchParamsToObject<IConfirmEmailPayload>(location.search);
      const res = await userApiDomainService.confirmEmail(searchParams);

      res
        .rightSideEffect(() => {
          history.push(`${LOGIN_PATH}?confirmation=success`);
        })
        .leftSideEffect(() => {
          history.push(`${LOGIN_PATH}?confirmation=error`);
        });
    })();
  }, [history, location]);

  return (
    <Box style={{ textAlign: 'center' }}>
      <Typography variant="h2">You&apos;ll be redirected soon to login page...</Typography>
    </Box>
  );
};

export default EmailVerification;
