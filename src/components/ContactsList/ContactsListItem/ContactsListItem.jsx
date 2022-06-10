import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import s from './ContactsListItem.module.css';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const contactsDelete = id => dispatch(deleteContact(id));

  return (
    <li id={id} className={s.item}>
      {name}: {number}
      <button className={s.btn} onClick={() => contactsDelete(id)}>
        Delete
      </button>
    </li>
  );
};
ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
