import { LiItem, ContactsList } from './ContactList.styled';

export default function ContactList({ filteredContacts, removeBook }) {
  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <LiItem key={id}>
          <span>{name + ':'}</span> <span>{number}</span>
          <button type="button" onClick={() => removeBook(id)}>
            Delete
          </button>
        </LiItem>
      ))}
    </ContactsList>
  );
}
