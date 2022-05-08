import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ContactsListItem.module.css';

export class ContactsListItem extends Component {
  static defaultProps = {
    id: '',
    name: '',
    number: '',
  };
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleRemove: PropTypes.func.isRequired,
  };
  render() {
    const { id, name, number, handleRemove } = this.props;
    return (
      <li id={id} className={s.item}>
        {name}: {number}
        <button className={s.btn} onClick={() => handleRemove(id)}>
          Delete
        </button>
      </li>
    );
  }
}
