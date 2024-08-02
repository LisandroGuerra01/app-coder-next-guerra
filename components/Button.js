import React from "react";

const Button = ({ children, className='', ...args }) => {
  return (
    <button className={`rounded-xl py-2 px-3 bg-indigo-400 text-center text-white ${className}`} {...args}>
      {children}
    </button>
  );
};

export default Button;