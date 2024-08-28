import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { componentRegistry } from '../../utils/componentRegistry';

export function generateComponentFile(type, props) {
  const ComponentFunction = componentRegistry[type].component;
  const renderedJSX = ReactDOMServer.renderToStaticMarkup(
    React.createElement(ComponentFunction, props)
  );

  const propsString = Object.keys(props).join(', ');

  return `
import React from 'react';

const ${type} = ({ ${propsString} }) => {
  ${type === 'Button' ? `const handleClick = ${props.onClick?.toString() || '() => {}'};` : ''}
  return (
    ${renderedJSX}
  );
};

export default ${type};
`.trim();
}