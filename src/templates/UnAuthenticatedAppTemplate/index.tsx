import React from 'react';
import { Box } from '@material-ui/core';

import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';
import AuthenticateRouter from 'routers/UnauthenticatedRouter';

const UnauthenticatedAppTemplate: React.FC = () => (
  <Box>
    <Navbar />
    <AuthenticateRouter />
    <Footer />
  </Box>
);

export default UnauthenticatedAppTemplate;
