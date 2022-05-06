import PropTypes from 'prop-types';

import s from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={s.container}>
      <h2>Find contacts by name</h2>
      <input className={s.input} onChange={onChange} value={value}></input>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
