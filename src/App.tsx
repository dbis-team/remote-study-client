import React from 'react';
import Box from '@material-ui/core/Box';

import { RootRouter } from './routers';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const App = () => (
  <Box>
    <Navbar />
    <RootRouter />
    <Footer />
  </Box>
);

export default App;
