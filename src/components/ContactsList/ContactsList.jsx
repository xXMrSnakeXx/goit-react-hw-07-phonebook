import { useSelector } from 'react-redux';

import { ContactsListItem } from './ContactsListItem';
import s from './ContactsList.module.css';

const getVisibleContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactsList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const contacts = getVisibleContacts(items, filter);
  return (
    <ul className={s.container}>
      {contacts.length
        ? contacts.map(({ id, name, number }) => (
            <ContactsListItem key={id} id={id} name={name} number={number} />
          ))
        : 'No contacts'}
    </ul>
  );
};
