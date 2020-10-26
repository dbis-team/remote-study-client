import { Button, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import Box from '@material-ui/core/Box';


interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}



export const RegistrationForm: React.FC<Props> = ({onSubmit}) => {
  return (
    <Formik
      initialValues={{
        firstName: '', 
        lastName: '', 
        email: '',
        password: '',
        confirmPassword: ''
        }} onSubmit={(values) =>{
            onSubmit(values)
        }}>
        {({values, handleChange, handleBlur}) => (
          <Form>
            <Box pt = {1}>
              <TextField  
                required
                variant="outlined"
                placeholder="first name"
                name="firstName" 
                value = {values.firstName} 
                onChange={handleChange}
                onBlur={handleBlur}
            /></Box>
            <Box pt = {1}>
              <TextField 
                required
                variant="outlined"
                placeholder="last name"
                name="lastName" 
                value = {values.lastName} 
                onChange={handleChange}
                onBlur={handleBlur}
            /></Box>
            <Box pt = {1}>
              <TextField 
                required
                variant="outlined"
                placeholder="email"
                name="email" 
                value = {values.email} 
                onChange={handleChange}
                onBlur={handleBlur}
            /></Box>
            <Box pt = {1}>
              <TextField 
                required
                variant="outlined"
                placeholder="password"
                name="password" 
                value = {values.password} 
                onChange={handleChange}
                onBlur={handleBlur}
            /></Box>
            <Box pt = {1}>
              <TextField 
                required
                variant="outlined"
                placeholder="confirm password"
                name="confirmPassword" 
                value = {values.confirmPassword} 
                onChange={handleChange}
                onBlur={handleBlur}
            /></Box>
            <Box pt = {2}>
              <Button 
                type="submit"
                color="primary"
                >Sign up</Button>
            </Box>
            </Form>
        )}
        </Formik>);
}