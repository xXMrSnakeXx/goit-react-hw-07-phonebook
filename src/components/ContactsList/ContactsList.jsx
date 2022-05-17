import PropTypes from 'prop-types';

import { ContactsListItem } from './ContactsListItem';
import s from './ContactsList.module.css';

export const ContactsList = ({ contacts, handleRemove }) => {
  return (
    <ul className={s.container}>
      {contacts.length
        ? contacts.map(({ id, name, number }) => (
            <ContactsListItem
              key={id}
              id={id}
              name={name}
              number={number}
              handleRemove={handleRemove}
            />
          ))
        : 'No contacts'}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleRemove: PropTypes.func.isRequired,
};
