import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk('user/addUser', async user => {
  try {
    const { data } = await axios.post('/users/signup', user);
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
      const { data } = await axios.post('/users/login', user);
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
    await axios.post('/users/logout');
    token.unSet();
  } catch (error) {
    console.log(error.message);
  }
});

export const update = createAsyncThunk('user/update', async (_, thuncApi) => {
  const storThunc = thuncApi.getState();
  const presentToken = storThunc.users.token;

  if (!presentToken) {
    thuncApi.dispatch(getContact());

    try {
      const { data } = await axios.get('/users/current');
      token.set(presentToken);
      return data;
    } catch (error) {
      console.log(
        'Не розумію, чому спрацьовує ця помилка при завантаженні сторінки'
      );
      console.log(error.message);
    }
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thuncApi) => {
    try {
      const { data } = await axios.post('/contacts', contacts);
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
      const { data } = await axios.get('/contacts');
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
      const { data } = await axios.delete(`/contacts/${contactId}`);
      const storThunc = thuncApi.getState();
      const presentToken = storThunc.users.token;
      token.set(presentToken);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
