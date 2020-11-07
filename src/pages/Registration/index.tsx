import React from 'react';
import Box from '@material-ui/core/Box';

import { RegistrationForm } from 'components/RegistrationForm';

const RegistrationPage: React.FC = () => (
  <Box style={{ textAlign: 'center' }}>
    <RegistrationForm onSubmit={console.info} />
  </Box>
);

export { RegistrationPage };
