import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';

import RegistrationForm from 'components/RegistrationForm';
import { actions as authActions } from 'store/reducers/isUserAuthenticated';

interface IRegistrationPageProps {
  setUserAuthenticated: typeof authActions.setUserAuthenticated;
}

const RegistrationPage: React.FC<IRegistrationPageProps> = ({ setUserAuthenticated }) => {
  const onSubmit = () => {
    setUserAuthenticated(true);
  };

  return (
    <Box style={{ textAlign: 'center' }}>
      <RegistrationForm onSubmit={onSubmit} />
    </Box>
  );
};

const mapDispatchToProps = {
  setUserAuthenticated: authActions.setUserAuthenticated,
};

export default connect(null, mapDispatchToProps)(RegistrationPage);
