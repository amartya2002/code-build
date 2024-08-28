import { componentRegistry } from '../utils/componentRegistry'

export default function RenderedComponent({ type, props }) {
  const Component = componentRegistry[type].component
  return <Component {...props} />
}

// import React from 'react';
// import { componentRegistry } from '../utils/componentRegistry';

// export default function RenderedComponent({ name, props }) {
//   const componentDef = componentRegistry.find(comp => comp.name === name);
  
//   if (!componentDef) {
//     console.error(`Component "${name}" not found in registry`);
//     return null;
//   }

//   const Component = componentDef.component;
//   return <Component {...props} />;
// }
