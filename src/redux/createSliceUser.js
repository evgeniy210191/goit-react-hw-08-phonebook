import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialStates } from './initialState';
import { logIn, logOut, signUp, update } from './thunc';

const hendleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isLoggedIn = true;
  state.token = payload.token;
};
const hendleUpdatePending = state => {
  state.isRerendung = true;
};
const hendleUpdateFulfilled = (state, { payload }) => {
  state.isRerendung = false;
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
      .addCase(update.pending, hendleUpdatePending)
      .addCase(update.fulfilled, hendleUpdateFulfilled)
      .addCase(logOut.fulfilled, hendleLogOutFulfilled)
      .addMatcher(isAnyOf(signUp.fulfilled, logIn.fulfilled), hendleFulfilled)
      .addMatcher(
        isAnyOf(
          signUp.rejected,
          logIn.rejected,
          update.rejected,
          logOut.rejected
        ),
        hendleRejected
      );
  },
});
