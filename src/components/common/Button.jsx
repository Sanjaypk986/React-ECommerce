import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick, children, className }) => {
  // Handler for the button click event
  const handleClick = () => {
    // Call the onClick function passed as a prop
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      <button onClick={handleClick} className={`px-2 sm:px-4 py-2 font-bold rounded ${className}`}>
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func, // onClick prop is a function
  className: PropTypes.string, // className prop is a string
  children: PropTypes.node.isRequired // children prop is required and can be any renderable node
};

export default Button;
