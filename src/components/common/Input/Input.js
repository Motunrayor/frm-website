import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

const Input = (props) => {
  const {
    label,
    name,
    value,
    placeholder,
    onChange,
    onFocus,
    onBlur,
    className,
    disabled,
    id,
    children,
    type
  } = props;

  return (
    <>
      <label className={(styles.input__label, styles[`${type}`], className)} htmlFor={id}>
        {(label || children) && (
          <span className={styles.input__label}>
            {children}
            {label}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          className={styles.input}
          placeholder={placeholder}
        />
      </label>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  children: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool
};

export default Input;
