import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContact } from 'redux/selectors';
import css from './ContactList.module.css';
import ContactComponent from 'component/ContactComponent/ContactComponent';
import { delContact } from 'redux/thunc';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContact);
  const dispatch = useDispatch();
  const deleteedContact = contactsId => {
    dispatch(delContact(contactsId));
  };

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
