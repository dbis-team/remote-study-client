import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserPartialData } from 'types/interfaces/IUserData';

const userSlice = createSlice({
  name: 'userData',
  initialState: {} as IUserPartialData,
  reducers: {
    addUserData: (state, action: PayloadAction<IUserPartialData>) => ({ ...state, ...action.payload }),
  },
});

const { actions, reducer } = userSlice;

export { actions, reducer };
