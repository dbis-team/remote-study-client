import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import RegistrationForm from 'components/RegistrationForm';
import { userApiDomainService } from 'services/api/domains/UserApiService';
import { actions as alertActions } from 'store/sagas/alert/sagaActions';
import { IRegistrationPayload } from 'types/entities/user/IRegistrationPayload';
import { CHECK_YOUR_EMAIL_PATH } from 'constants/routes';

interface IRegistrationPageProps {
  setAlert: typeof alertActions.setAutoCleaningAlert
}

const RegistrationPage: React.FC<IRegistrationPageProps> = ({ setAlert }) => {
  const history = useHistory();

  const onSubmit = async (payload: IRegistrationPayload) => {
    const result = await userApiDomainService.register(payload);

    result
      .rightSideEffect(() => history.push(CHECK_YOUR_EMAIL_PATH))
      .leftSideEffect(() => setAlert({
        open: true,
        feedbackMessage: 'Registration error',
        severity: 'error',
      }));
  };

  return (
    <Box style={{ textAlign: 'center' }}>
      <RegistrationForm onSubmit={onSubmit} />
    </Box>
  );
};

const mapDispatchToProps = {
  setAlert: alertActions.setAutoCleaningAlert,
};

export default connect(null, mapDispatchToProps)(RegistrationPage);
