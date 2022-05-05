import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import s from './ContactsListItem.module.css';

export class ContactsListItem extends Component {
  static defaultProps = {
    contacts: [],
  };
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    handleRemove: PropTypes.func.isRequired,
  };
  render() {
    const { contacts, handleRemove } = this.props;
    return contacts.map(({ id, name, number }) => (
      <li key={nanoid()} id={id} className={s.item}>
        {name}: {number}
        <button className={s.btn} onClick={() => handleRemove(id)}>
          Delete
        </button>
      </li>
    ));
  }
}
