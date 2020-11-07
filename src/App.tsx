import React from 'react';
import Box from '@material-ui/core/Box';
import { Navbar } from './components/Navbar';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';

const App = () => (
  <Box>
    <Navbar />
    <Box style={{ textAlign: 'center' }}>
      <RegistrationForm onSubmit={({
        email, firstName, lastName, password, confirmPassword,
      }) => {
        console.info(email, firstName, lastName, password, confirmPassword);
      }}
      />
      <Footer />
    </Box>
  </Box>

);

export default App;
