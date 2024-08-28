// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import { componentRegistry } from '../../utils/componentRegistry';

// export function generateComponentFile(type, props) {
//   const ComponentFunction = componentRegistry[type].component;
//   const renderedJSX = ReactDOMServer.renderToStaticMarkup(
//     React.createElement(ComponentFunction, props)
//   );

//   const propsString = Object.keys(props).join(', ');

//   return `
// import React from 'react';

// const ${type} = ({ ${propsString} }) => {
//   ${type === 'Button' ? `const handleClick = ${props.onClick?.toString() || '() => {}'};` : ''}
//   return (
//     ${renderedJSX}
//   );
// };

// export default ${type};
// `.trim();
// }

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { componentRegistry } from '../../utils/componentRegistry';

export function generateComponentFile(type, props) {
  // Find the component in the registry
  let ComponentFunction = null;
  for (const category in componentRegistry) {
    if (componentRegistry[category].components[type]) {
      ComponentFunction = componentRegistry[category].components[type].component;
      break;
    }
  }

  if (!ComponentFunction) {
    throw new Error(`Component type "${type}" is not found in the registry.`);
  }

  const renderedJSX = ReactDOMServer.renderToStaticMarkup(
    React.createElement(ComponentFunction, props)
  );

  const propsString = Object.keys(props).join(', ');

  return `
import React from 'react';

const ${type} = ({ ${propsString} }) => {
  ${type === 'PrimaryButton' || type === 'SecondaryButton' ? `const handleClick = ${props.onClick?.toString() || '() => {}'};` : ''}
  return (
    ${renderedJSX}
  );
};

export default ${type};
`.trim();
}
