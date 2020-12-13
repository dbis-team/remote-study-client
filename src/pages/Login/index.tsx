import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import LoginForm from 'components/LoginForm';
import { actions as loadingActions } from 'store/reducers/isLoading';
import { actions as authActions } from 'store/sagas/auth/sagaActions';

import { ILoginPayload } from 'types/entities/user/ILoginPayload';
import { actions as alertActions } from 'store/sagas/alert/sagaActions';

interface ILoginPageProps {
  login: typeof authActions.login;
  setAlert: typeof alertActions.setAutoCleaningAlert;
  setIsLoading: typeof loadingActions.setIsLoading;
}

const LoginPage: React.FC<ILoginPageProps> = ({ login, setAlert, setIsLoading }) => {
  const location = useLocation();

  const onSubmit = async (loginPayload: ILoginPayload) => {
    login(loginPayload);
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
  login: authActions.login,
  setIsLoading: loadingActions.setIsLoading,
  setAlert: alertActions.setAutoCleaningAlert,
};

export default connect(null, mapDispatchToProps)(LoginPage);
