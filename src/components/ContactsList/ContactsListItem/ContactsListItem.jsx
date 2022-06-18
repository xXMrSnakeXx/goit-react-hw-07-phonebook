import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import Notiflix from 'notiflix';

import s from './ContactsListItem.module.css';

export const ContactsListItem = ({ id, name, number }) => {
  const [contactsDelete, { isSuccess, isLoading }] = useDeleteContactMutation();

  return (
    <>
      <li id={id} className={s.item}>
        {name}: {number}
        <button
          className={s.btn}
          onClick={() => contactsDelete(id)}
          disabled={isLoading}
        >
          Delete
        </button>
      </li>
      {isSuccess && Notiflix.Notify.info('Contact deleted')}
    </>
  );
};
ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
