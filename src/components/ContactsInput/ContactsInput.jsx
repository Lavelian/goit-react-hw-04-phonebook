import { InputLabel } from './ContactsInput.styled';
export default function ContactsInput({ handleChange, filter }) {
  return (
    <InputLabel>
      Find Contacts by name
      <input
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
        placeholder="Filter"
      />
    </InputLabel>
  );
}
