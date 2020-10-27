import React from 'react';
import { Navbar } from './components/Navbar';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';
import Box from '@material-ui/core/Box';

const App = () => {
  return (
  <Box>
    <Navbar />
    <Box style={{ textAlign: "center"}}>
    <RegistrationForm onSubmit={({email, firstName, lastName, password, confirmPassword}) => {
        console.log(email, firstName, lastName, password, confirmPassword)
       }}/>
    <Footer />
    </Box>
  </Box>
  
  )
};

export default App;
