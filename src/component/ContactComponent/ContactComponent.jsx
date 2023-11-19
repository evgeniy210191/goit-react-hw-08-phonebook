import PropTypes from 'prop-types';
import css from './ContactComponent.module.css';
function ContactComponent({ id, name, number, deleteContact }) {
  return (
    <li className={css.listContacts}>
      <p className={css.contact}>
        {name}: {number}
      </p>
      <button
        className={css.addContact}
        type="button"
        onClick={() => deleteContact(id)}
      >
        delete
      </button>
    </li>
  );
}

export default ContactComponent;

ContactComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
