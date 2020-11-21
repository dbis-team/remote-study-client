import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const isUserAuthenticatedSlice = createSlice({
  name: 'isUserAuthenticated',
  initialState: false,
  reducers: {
    setUserAuthenticated: (state, action: PayloadAction<boolean>) => action.payload,
  },
});

const { actions, reducer } = isUserAuthenticatedSlice;

export { actions, reducer };
