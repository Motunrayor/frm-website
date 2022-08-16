import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Styles from './button.module.scss';

const Button = ({ type, onClick, children, className, theme }) => {
  return (
    <button
      className={classnames(Styles.btn, Styles[`btn__${theme}`], className)}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  type: 'button'
};

Button.propTypes = {
  type: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.string.isRequired
};
export default Button;
