import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import Form from 'components/Form';
import Contact from 'components/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LS_KEY = 'contacts';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LS_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    if (isDuplicate(name, number)) {
      return notify();
    }
    setContacts(prevContacts => {
      return [...prevContacts, { name, number, id: nanoid() }];
    });
  };
  const removeBook = id => {
    setContacts(prev => {
      const newContacts = prev.filter(item => item.id !== id);
      return newContacts;
    });
  };
  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(
      ({ name, number }) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        number.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const isDuplicate = (name, number) => {
    return contacts.find(
      contact => contact.name === name && contact.number === number
    );
  };
  const notify = () => toast('There is already a contact');
  const filteredContacts = getFilteredContacts();
  return (
    <Container>
      <h1>PhoneBook</h1>
      <Form OnSubmitForm={formSubmitHandler} />
      <Contact
        filter={filter}
        filteredContacts={filteredContacts}
        handleChange={handleChange}
        removeBook={removeBook}
      />
      <ToastContainer />
    </Container>
  );
}
