import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const isLoggedIn = state => state.users.isLoggedIn;
export const selectUserName = state => state.users.user.email;
export const selectisRerendung = state => state.users.isRerendung;

export const selectFilteredContact = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
