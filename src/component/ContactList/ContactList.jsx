import { useDispatch, useSelector } from 'react-redux';
import { slectContacts, slectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/reducer';
import css from './ContactList.module.css';
import ContactComponent from 'component/ContactComponent/ContactComponent';

function ContactList() {
  const contacts = useSelector(slectContacts);
  const filter = useSelector(slectFilter);
  const dispatch = useDispatch();
  const deleteedContact = contactsId => {
    return dispatch(deleteContact(contactsId));
  };

  const filterContactsByName = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContactsByName();
  return (
    <ul className={css.contactsContainer}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactComponent
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteedContact}
          />
        );
      })}
    </ul>
  );
}

export default ContactList;
