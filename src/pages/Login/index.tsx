import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import LoginForm from 'components/LoginForm';
import { actions as authActions } from 'store/reducers/isUserAuthenticated';
import { actions as loadingActions } from 'store/reducers/isLoading';

import { ACCESS_TOKEN } from 'constants/localStoreKeys';
import { LocalStoreService } from 'services/LocalStoreService';
import { userApiDomainService } from 'services/api/domains/UserApiService';
import { ILoginPayload } from 'types/entities/user/ILoginPayload';
import { actions as alertActions } from 'store/sagas/alert/sagaActions';

interface ILoginPageProps {
  setUserAuthenticated: typeof authActions.setUserAuthenticated;
  setAlert: typeof alertActions.setAutoCleaningAlert;
  setIsLoading: typeof loadingActions.setIsLoading;
}

const LoginPage: React.FC<ILoginPageProps> = ({ setUserAuthenticated, setAlert, setIsLoading }) => {
  const location = useLocation();

  const onSubmit = async (loginPayload: ILoginPayload) => {
    setIsLoading(true);
    const loginRes = await userApiDomainService.login(loginPayload);

    loginRes
      .rightSideEffect((data) => {
        LocalStoreService.getInstance().add(ACCESS_TOKEN, data.access_token);
        setUserAuthenticated(true);
      })
      .leftSideEffect(() => {
        setAlert({
          open: true,
          feedbackMessage: 'Login error',
          severity: 'error',
        });
      });
      
    setIsLoading(false);
  };

  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('confirmation') === 'success') {
      setAlert({
        open: true,
        feedbackMessage: 'Your email successfuly confirmed. Please, login.',
        severity: 'success',
      });
    }

    if (searchParams.get('confirmation') === 'error') {
      setAlert({
        open: true,
        feedbackMessage: 'Error heppend during email confirmations',
        severity: 'error',
      });
    }
  }, [location, setAlert]);

  return (
    <Box style={{ textAlign: 'center' }}>
      <LoginForm onSubmit={onSubmit} />
    </Box>
  );
};

const mapDispatchToProps = {
  setUserAuthenticated: authActions.setUserAuthenticated,
  setIsLoading: loadingActions.setIsLoading,
  setAlert: alertActions.setAutoCleaningAlert,
};

export default connect(null, mapDispatchToProps)(LoginPage);
