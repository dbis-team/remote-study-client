import React from 'react';
import { Box, Typography, IconButton } from '@material-ui/core';
import AttachmentIcon from '@material-ui/icons/Attachment';
import CloseIcon from '@material-ui/icons/Close';

function humanFileSize(bytes: number, si=false, dp=1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = si 
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] 
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10**dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


  return bytes.toFixed(dp) + ' ' + units[u];
}

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
