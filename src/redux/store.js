import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactSlise, filterSlice } from './createSliceContacts';
import {
  persistStore,
  persistReducer,
  REGISTER,
  PURGE,
  PERSIST,
  PAUSE,
  REHYDRATE,
  FLUSH,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { usersOperation } from './createSliceUser';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const reducer = combineReducers({
  users: persistReducer(persistConfig, usersOperation.reducer),
  contacts: contactSlise.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
