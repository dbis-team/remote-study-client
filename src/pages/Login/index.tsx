import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';

import LoginForm from 'components/LoginForm';
import { actions as authActions } from 'store/reducers/isUserAuthenticated';

interface ILoginPageProps {
  setUserAuthenticated: typeof authActions.setUserAuthenticated;
}

const LoginPage: React.FC<ILoginPageProps> = ({ setUserAuthenticated }) => {
  const onSubmit = () => {
    setUserAuthenticated(true);
  };

  return (
    <Box style={{ textAlign: 'center' }}>
      <LoginForm onSubmit={onSubmit} />
    </Box>
  );
};

const mapDispatchToProps = {
  setUserAuthenticated: authActions.setUserAuthenticated,
};

export default connect(null, mapDispatchToProps)(LoginPage);