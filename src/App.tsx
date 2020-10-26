import React from 'react';
import {RegistrationForm} from './components/RegistrationForm'

const App = () => {
  return <div style={{ textAlign: "center"}}>
  <RegistrationForm onSubmit={({email, firstName, lastName, password, confirmPassword}) => {
    console.log(email, firstName, lastName, password, confirmPassword)
  }}/>
  </div>
};

export default App;
