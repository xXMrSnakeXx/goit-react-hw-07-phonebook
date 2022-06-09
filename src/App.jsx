import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, changeFilter } from './redux/contactsSlice';

import { ContactForm } from './components/ContactForm';
import { ContactsList } from './components/ContactsList';
import { Filter } from './components/Filter';
import s from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const onSubmit = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    )
      return alert(`Number: ${data.name} is already in phonebook`);
    dispatch(addContact(data));
  };

  const filterChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  const contactsDelete = id => dispatch(deleteContact(id));

  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmitData={onSubmit} />
      <h2 className={s.title}>Contacts</h2>
      <Filter value={filter} onChange={filterChange} />
      <ContactsList
        contacts={getVisibleContacts}
        handleRemove={contactsDelete}
      />
    </>
  );
};
