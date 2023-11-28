import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const privatInstans = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
const publicInstans = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const token = {
  set(token) {
    privatInstans.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    privatInstans.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk('user/addUser', async user => {
  try {
    const { data } = await publicInstans.post('/users/signup', user);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logIn = createAsyncThunk(
  'user/enterUser',
  async (user, { dispatch }) => {
    try {
      const { data } = await publicInstans.post('/users/login', user);
      token.set(data.token);
      dispatch(getContact());
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const logOut = createAsyncThunk('user/exitUser', async () => {
  try {
    await privatInstans.post('/users/logout');
    token.unSet();
  } catch (error) {
    console.log(error.message);
  }
});

export const update = createAsyncThunk('user/update', async (_, thuncApi) => {
  const storThunc = thuncApi.getState();
  const presentToken = storThunc.users.token;
  if (presentToken) {
    try {
      token.set(presentToken);
      const { data } = await privatInstans.get('/users/current');
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  return;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thuncApi) => {
    try {
      const { data } = await privatInstans.post('/contacts', contacts);
      const storThunc = thuncApi.getState();
      const presentToken = storThunc.users.token;
      token.set(presentToken);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const getContact = createAsyncThunk(
  'contacts/getContact',
  async (_, thuncApi) => {
    try {
      const { data } = await privatInstans.get('/contacts');
      const storThunc = thuncApi.getState();
      const presentToken = storThunc.users.token;
      token.set(presentToken);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const delContact = createAsyncThunk(
  'contacts/delContact',
  async (contactId, thuncApi) => {
    try {
      const { data } = await privatInstans.delete(`/contacts/${contactId}`);
      const storThunc = thuncApi.getState();
      const presentToken = storThunc.users.token;
      token.set(presentToken);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
