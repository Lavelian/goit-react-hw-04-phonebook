import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import SectionPhoneBook from './SectionPhoneBook/';
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
    <>
      <SectionPhoneBook
        title={'PhoneBook'}
        OnSubmit={formSubmitHandler}
        filteredContacts={filteredContacts}
        filter={filter}
        handleChange={handleChange}
        removeBook={removeBook}
      />
      <ToastContainer />
    </>
  );
}
