import { createSlice } from '@reduxjs/toolkit';
import { initialStates } from './initialState';
import { logIn, logOut, signUp, update } from './thunc';

const hendleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isLoggedIn = true;
  state.token = payload.token;
};

const hendleUpdateFulfilled = (state, { payload }) => {
  if (!payload) {
    return;
  }
  state.user = payload;
  state.isLoggedIn = true;
};
const hendleLogOutFulfilled = state => {
  state.user = { name: '', email: '' };
  state.token = null;
  state.isLoggedIn = false;
};
const hendleRejected = (state, action) => {
  console.log(action);
};

export const usersOperation = createSlice({
  name: 'user',
  initialState: initialStates.users,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, hendleFulfilled)
      .addCase(signUp.rejected, hendleRejected)
      .addCase(logIn.fulfilled, hendleFulfilled)
      .addCase(logIn.rejected, hendleRejected)
      .addCase(update.fulfilled, hendleUpdateFulfilled)
      .addCase(update.rejected, hendleRejected)
      .addCase(logOut.fulfilled, hendleLogOutFulfilled)
      .addCase(logOut.rejected, hendleRejected);
  },
});
