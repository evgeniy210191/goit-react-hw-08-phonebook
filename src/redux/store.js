import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactSlise, filterSlice } from './reducer';
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
import { usersOperation } from './createSlice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const reducer = combineReducers({
  contacts: contactSlise.reducer,
  filter: filterSlice.reducer,
  users: persistReducer(persistConfig, usersOperation.reducer),
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
