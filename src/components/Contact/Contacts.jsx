import PropTypes from 'prop-types';
import ContactList from 'components/ContactList';
import ContactsInput from 'components/ContactsInput';
const Contact = ({ filteredContacts, filter, handleChange, removeBook }) => {
  return (
    <>
      <h2>Conatcts</h2>
      <ContactsInput filter={filter} handleChange={handleChange} />
      <ContactList
        filteredContacts={filteredContacts}
        removeBook={removeBook}
      />
    </>
  );
};
Contact.defaultProps = {
  filteredContacts: [],
};
Contact.propTypes = {
  filter: PropTypes.string.isRequired,
  filteredContacts: PropTypes.array.isRequired,
};

export default Contact;
