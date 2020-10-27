import React from 'react';
import { Navbar } from './components/Navbar';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';

const App = () => {
  return (<div>
  <Navbar />
  <div style={{ textAlign: "center"}}>
  <RegistrationForm onSubmit={({email, firstName, lastName, password, confirmPassword}) => {
    console.log(email, firstName, lastName, password, confirmPassword)
  }}/>
    <Footer />
  </div>
  </div>
  
  )
};

export default App;
