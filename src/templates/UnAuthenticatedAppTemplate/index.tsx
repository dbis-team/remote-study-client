import React from 'react';
import { Box } from '@material-ui/core';

import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';
import UnauthenticatedRouter from 'routers/UnauthenticatedRouter';

const UnauthenticatedAppTemplate: React.FC = () => (
  <Box>
    <Navbar />
    <Box pt={12}>
      <UnauthenticatedRouter />
    </Box>
    <Footer />
  </Box>
);

export default UnauthenticatedAppTemplate;
