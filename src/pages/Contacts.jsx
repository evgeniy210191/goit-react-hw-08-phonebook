import ContactForm from 'component/ContactForm/ContactForm';
import ContactList from 'component/ContactList/ContactList';
import Filter from 'component/Filter/Filter';

function Contacts(props) {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default Contacts;
