export default function componentTemplate(type, props, componentCode) {
  return `
import React from 'react';

const ${type} = ({ ${Object.keys(props).join(', ')} }) => {
  ${type === 'Button' ? `const handleClick = ${props.onClick.toString()};` : ''}
  return (
    ${componentCode}
  );
};

export default ${type};
`.trim();
}