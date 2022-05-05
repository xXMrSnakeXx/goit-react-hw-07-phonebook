import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

export class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  render() {
    const { value, onChange } = this.props;
    return (
      <div className={s.container}>
        <h2>Find contacts by name</h2>
        <input className={s.input} onChange={onChange} value={value}></input>
      </div>
    );
  }
}
