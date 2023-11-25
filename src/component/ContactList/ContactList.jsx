import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContact } from 'redux/selectors';
import ContactComponent from 'component/ContactComponent/ContactComponent';
import { delContact } from 'redux/thunc';
import { UnorderedList } from '@chakra-ui/react';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContact);
  const dispatch = useDispatch();
  const deleteedContact = contactsId => {
    dispatch(delContact(contactsId));
  };

  return (
    <UnorderedList w="600px">
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
    </UnorderedList>
  );
}

export default ContactList;
