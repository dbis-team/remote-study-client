import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGlobalStore } from 'types/interfaces/IGlobalStore';

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false as IGlobalStore['isLoading'],
  reducers: {
    setIsLoading: (state, action: PayloadAction<IGlobalStore['isLoading']>) => action.payload
  }
});

const { actions, reducer } = isLoadingSlice;

export { actions, reducer };
