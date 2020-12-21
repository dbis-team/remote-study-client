import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import AttachmentIcon from '@material-ui/icons/Attachment';

export interface IFileComponentProps {
  fileUrl: string;
  fileName: string;
}

const FileReadonlyComponent: React.FC<IFileComponentProps> = ({ fileUrl, fileName }) => {
  return (
    <Box 
      marginBottom={1} 
      marginTop={1} 
      display="flex" 
      alignItems="center"
    >
      <Box marginRight={1.5}>
        <AttachmentIcon />
      </Box>
      <Box>
        <Link target='_blank' href={fileUrl}>
          <Typography>{fileName}</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export { FileReadonlyComponent };
