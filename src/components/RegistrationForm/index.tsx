import React from 'react';
import { Button, TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Form, Formik } from 'formik';
import Typography from '@material-ui/core/Typography';
import * as routes from 'constants/routes';

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

const RegistrationForm: React.FC<Props> = ({ onSubmit }) => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }}
    onSubmit={onSubmit}
  >
    {({ values, handleChange, handleBlur }) => (
      <Form>
        <Box pt={12}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
          >
            Sign up
          </Typography>
        </Box>
        <Box pt={3}>
          <TextField
            required
            variant="outlined"
            placeholder="first name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
        <Box pt={1}>
          <TextField
            required
            variant="outlined"
            placeholder="last name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
        <Box pt={1}>
          <TextField
            required
            variant="outlined"
            placeholder="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
        <Box pt={1}>
          <TextField
            required
            type="password"
            variant="outlined"
            placeholder="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
        <Box pt={1}>
          <TextField
            required
            type="password"
            variant="outlined"
            placeholder="confirm password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
        <Box pt={2}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
          >
            Sign up
          </Button>
        </Box>
        <Box pt={2}>
          <Button
            href={routes.LOGIN_PATH}
            color="primary"
          >
            Log in
          </Button>
        </Box>
      </Form>
    )}
  </Formik>
);

export default RegistrationForm;
