import React from 'react';
import { Button, TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Form, Formik } from 'formik';
import Typography from '@material-ui/core/Typography';

import * as routes from 'constants/routes';
import { IRegistrationPayload } from 'types/entities/user/IRegistrationPayload';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long')
    .required('Field is required'),
  email: Yup.string().email().required('Field is required'),
  password: Yup.string()
    .min(6, 'Too short!')
    .max(20, 'Too long')
    .required('Field is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Field is required'),
});

interface Props {
  onSubmit: (values: IRegistrationPayload) => Promise<void> | void;
}

const RegistrationForm: React.FC<Props> = ({ onSubmit }) => (
  <Formik
    initialValues={{
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ values, handleChange, handleBlur, errors, touched }) => (
      <Form>
        <Box>
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
            placeholder="Name"
            name="userName"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.userName && !!errors.userName}
            helperText={touched.userName && errors.userName}
          />
        </Box>
        <Box pt={2}>
          <TextField
            required
            variant="outlined"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
        </Box>
        <Box pt={2}>
          <TextField
            required
            type="password"
            variant="outlined"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
          />
        </Box>
        <Box pt={2}>
          <TextField
            required
            type="password"
            variant="outlined"
            placeholder="Confirm password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.confirmPassword && !!errors.confirmPassword}
            helperText={touched.confirmPassword && errors.confirmPassword}
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
