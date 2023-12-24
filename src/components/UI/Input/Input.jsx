import React from 'react';

import css_Input from './Input.module.css';

const Input = (props) => {
  return (
    <div
      className={`${css_Input.control} ${
        props.isValid === false ? css_Input.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};
//{dddddd}
export default Input;
