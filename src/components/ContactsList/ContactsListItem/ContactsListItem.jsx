import PropTypes from 'prop-types';

import s from './ContactsListItem.module.css';

export const ContactsListItem = ({ id, name, number, handleRemove }) => {
  return (
    <li id={id} className={s.item}>
      {name}: {number}
      <button className={s.btn} onClick={() => handleRemove(id)}>
        Delete
      </button>
    </li>
  );
};
ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
