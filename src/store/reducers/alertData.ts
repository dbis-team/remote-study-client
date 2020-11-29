import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGlobalStore } from 'types/interfaces/IGlobalStore';

const alertDataSlice = createSlice({
  name: 'alertData',
  initialState: { open: false } as IGlobalStore['alertData'],
  reducers: {
    setAlertData: (state, action: PayloadAction<IGlobalStore['alertData']>) => action.payload,
  },
});

const { actions, reducer } = alertDataSlice;

export { actions, reducer };
