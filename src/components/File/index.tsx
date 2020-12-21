import React from 'react';
import { Box, Typography, IconButton } from '@material-ui/core';
import AttachmentIcon from '@material-ui/icons/Attachment';
import CloseIcon from '@material-ui/icons/Close';

import { humanFileSize } from 'helpers/humanFileSize';

export interface IFileComponentProps {
  file: File;
  onFileRemove: (file: File) => void; 
}

const FileComponent: React.FC<IFileComponentProps> = ({ file, onFileRemove }) => {
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
        <Typography>{`${file.name} (${humanFileSize(file.size)})`}</Typography>
      </Box>
      <IconButton onClick={() => onFileRemove(file)}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export { FileComponent };
