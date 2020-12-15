import React from 'react';
import { Box } from '@material-ui/core';
import BackupIcon from '@material-ui/icons/Backup';

import { useStyles } from './styles';

interface IDropZoneProps {
  onAddFiles: (files: File[]) => void;
}

const DropZone: React.FC<IDropZoneProps> = ({ onAddFiles }) => {
  const classes = useStyles();

  const handleFiles = (files: FileList) => {
    const filesArr: File[] = [];
    for(let i = 0; i < files.length; i++) {
      filesArr.push(files[i]);
    }
    onAddFiles(filesArr)
  };

  const dragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const dragEnter = (e: React.DragEvent) => {
    e.preventDefault();
  }

  const dragLeave = (e: React.DragEvent) => {
    e.preventDefault();
  }

  const fileDrop = (e: React.DragEvent) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      if (files.length) {
        handleFiles(files);
    }
  };

  return (
    <Box className={classes.container}>
      <Box 
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        className={classes.dropContainer}
      >
        <Box className={classes.dropMessage}>
          <Box>
            <BackupIcon />
          </Box>
          Drag & Drop files here or click to upload
        </Box>
      </Box>
    </Box>
  );
};

export { DropZone };
