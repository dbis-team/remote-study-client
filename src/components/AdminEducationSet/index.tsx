import React from 'react';
import { EducationSet } from 'components/EducationSet';
import { useStyles } from './styles';
import { AddEducationSet } from 'components/AddEducationSet';
import Box from '@material-ui/core/Box';

export const AdminEducationSet: React.FunctionComponent = () => {
    const classes = useStyles();
    
    return (
        <Box>
            <EducationSet />
            <EducationSet />
            <AddEducationSet />
        </Box>
    )
  };