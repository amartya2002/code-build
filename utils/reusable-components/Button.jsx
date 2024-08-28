import React from 'react';

export const Button = ({ children = 'Click me', onClick = () => {} }) => (
  <button onClick={onClick} className="px-4 py-1.5 bg-blue-500 text-white rounded">
    {children}
  </button>
);
