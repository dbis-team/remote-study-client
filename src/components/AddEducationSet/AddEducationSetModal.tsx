import React from 'react';
import { Button, TextField, Box } from '@material-ui/core';
import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { ICreateEducationSet } from 'types/entities/educationSet/ICreateEducationSet';
import ModalWindow, { ModalWindowPropsInterface } from '../Modals/ModalWindow';

import { useStyles } from './styles';

export interface IAddEducationSetModalProps extends Pick<ModalWindowPropsInterface, 'handleClose' | 'isOpen'> {
  onCreateEducationSet: (payload: ICreateEducationSet) => Promise<void>;
}

const AddEducationSetModal: React.FC<IAddEducationSetModalProps> = (props) => {
  const styles = useStyles();
  
  const handleSubmit = async (payload: ICreateEducationSet, helper: FormikHelpers<ICreateEducationSet>) => {
    await props.onCreateEducationSet(payload);

    if (props.handleClose) {
      props.handleClose();
    }

    helper.resetForm();
  };

  const formik = useFormik<ICreateEducationSet>({
    initialValues: { name: '' },
    onSubmit: handleSubmit,
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Field is required'),
    }),
  });

  return (
    <ModalWindow 
      maxWidth="lg" 
      title="Add Education Set" 
      {...props}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <TextField
            className={styles.educationSetModal} 
            required
            variant="outlined"
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.name && formik.errors.name}
            error={!!formik.touched.name && !!formik.errors.name}
          />
        </Box>
        <Box display="flex" justifyContent="flex-end" pt={1}>
          <Button type="submit" variant="contained">save</Button>
        </Box>
      </form>
    </ModalWindow>
  );
};


export { AddEducationSetModal };
