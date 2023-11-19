import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/reducer';
import { nanoid } from '@reduxjs/toolkit';
import { slectContacts } from 'redux/selectors';
import css from './ContactForm.module.css';
function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(slectContacts);
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    if (contacts.find(namePhonsbooks => namePhonsbooks.name === name.value)) {
      alert('Sory, your phonebook have same name yet');
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };
    setName('');
    setNumber('');
    return dispatch(addNewContact(newContact));
  };

  const hendleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <h1>Phonebook</h1>
      <form className={css.formContact} onSubmit={onSubmit}>
        <label className={css.labelInputs}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={hendleChange}
            required
            placeholder="Enter your name"
          />
        </label>
        <label className={css.labelInputs}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={hendleChange}
            required
            placeholder="Enter your phone number"
          />
        </label>
        <button className={css.addContact} type="submit">
          add contact
        </button>
      </form>
    </>
  );
}

export default ContactForm;
