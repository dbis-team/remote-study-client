import React from 'react';
import { Box } from '@material-ui/core';

import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';
import AuthenticateRouter from 'routers/AuthenticateRouter';

const AuthenticatedAppTemplate: React.FC = () => (
  <Box>
    <Navbar showBurgerButton />
    <AuthenticateRouter />
    <Footer />
  </Box>
);

export default AuthenticatedAppTemplate;
