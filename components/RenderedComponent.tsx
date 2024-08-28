// import { componentRegistry } from '../utils/componentRegistry'

// export default function RenderedComponent({ type, props }) {
//   const Component = componentRegistry[type].component
//   return <Component {...props} />
// }

import { componentRegistry } from '../utils/componentRegistry';

export default function RenderedComponent({ type, props }) {
  // Find the component in the registry
  let Component = null;
  for (const category in componentRegistry) {
    if (componentRegistry[category].components[type]) {
      Component = componentRegistry[category].components[type].component;
      break;
    }
  }

  if (!Component) {
    // Handle the case where the component type is not found
    return <div>Component not found</div>;
  }

  return <Component {...props} />;
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
