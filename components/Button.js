import React from "react";

const Button = ({ children, className='', ...args }) => {
  return (
    <button className={`border border-indigo-500 hover:bg-indigo-300 font-bold py-2 px-4 rounded ${className}`} {...args}>
      {children}
    </button>
  );
};

export default Button;