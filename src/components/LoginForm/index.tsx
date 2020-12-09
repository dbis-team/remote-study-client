import React from 'react';
import { Button, TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Form, Formik } from 'formik';
import Typography from '@material-ui/core/Typography';
import * as routes from 'constants/routes';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Field is required'),
  password: Yup.string()
  .max(20, 'Too long!')
  .required('Field is required'),
});

interface Values {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const LoginForm: React.FC<Props> = ({ onSubmit }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ values, handleChange, handleBlur }) => (
      <Form>
        <Box>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
          >
            Log in
          </Typography>
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
        <Box pt={2}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
          >
            Log in
          </Button>
        </Box>
        <Box pt={2}>
          <Button
            href={routes.REGISTRATION_PATH}
            color="primary"
          >
            Sign up
          </Button>
        </Box>
      </Form>
    )}
  </Formik>
);

export default LoginForm;
