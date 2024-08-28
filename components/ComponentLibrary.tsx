import { useStore } from '../store/useStore';
import { componentRegistry } from '../utils/componentRegistry';

export default function ComponentLibrary() {
  const addComponent = useStore(state => state.addComponent);

  return (
    <div className="w-64 px-4 py-2">
      <h2 className="text-lg font-bold mb-4">Components</h2>
      {Object.entries(componentRegistry).map(([categoryName, category]) => (
        <div key={categoryName} className="mb-4">
          <h3 className="text-lg font-semibold mb-2">{categoryName}</h3>
          {Object.entries(category.components).map(([componentName, component]) => (
            <div
              key={componentName}
              onClick={() => addComponent(componentName)}
              className="flex items-center mb-2 p-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-300"
            >
              <img src={component.thumbnail} alt={`${componentName} thumbnail`} className="w-16 h-16 mr-2 rounded" />
              <span className="text-sm font-medium">{componentName}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}




// import { useStore } from '../store/useStore'
// import { componentRegistry } from '../utils/componentRegistry'

// export default function ComponentLibrary() {
//   const addComponent = useStore(state => state.addComponent)

//   return (
//     <div className="w-64 px-4 py-2">
//       <h2 className="text-lg font-bold mb-4">Components</h2>
//       {Object.entries(componentRegistry).map(([name, component]) => (
//         <div
//           key={name}
//           onClick={() => addComponent(name)}
//           className="block w-full text-start mb-2 bg-zinc-950 text-sm font-medium rounded-md text-white p-3 cursor-pointer"
//         >
//           {name}
//         </div>
//       ))}
//     </div>
//   )
// }


// import React, { useState } from 'react';
// import { useStore } from '../store/useStore';
// import { componentRegistry } from '../utils/componentRegistry';

// // ComponentPreview Component
// const ComponentPreview = ({ componentName }) => {
//   if (!componentName) return null;

//   const Component = componentRegistry[componentName].component;
//   const defaultProps = componentRegistry[componentName].props;

//   return (
//     <div className="p-4 border border-gray-700 rounded-md bg-gray-800">
//       <h3 className="text-lg font-bold mb-2">Preview</h3>
//       <Component
//         {...Object.fromEntries(
//           Object.entries(defaultProps).map(([key, value]) => [key, value.default])
//         )}
//       />
//     </div>
//   );
// };

// // Main ComponentLibrary Component
// export default function ComponentLibrary() {
//   const addComponent = useStore(state => state.addComponent);
//   const [selectedComponent, setSelectedComponent] = useState(null);

//   const handleComponentClick = (name) => {
//     addComponent(name);
//     setSelectedComponent(name);
//   };

//   return (
//     <div className="w-64 px-4 py-2">
//       <h2 className="text-lg font-bold mb-4">Components</h2>
//       <div className="space-y-2 mb-4">
//         {Object.entries(componentRegistry).map(([name]) => (
//           <div
//             key={name}
//             onClick={() => handleComponentClick(name)}
//             className={`block w-full text-start mb-2 bg-zinc-950 text-sm font-medium rounded-md text-white p-3 cursor-pointer ${
//               selectedComponent === name ? 'bg-gray-700' : 'bg-gray-600'
//             }`}
//           >
//             {name}
//           </div>
//         ))}
//       </div>
//       <ComponentPreview componentName={selectedComponent} />
//     </div>
//   );
// }


// 'use client';


// import React from 'react';
// import { useStore } from '../store/useStore';
// import { componentRegistry } from '../utils/componentRegistry';

// export default function ComponentLibrary() {
//   const addComponent = useStore(state => state.addComponent);

//   const renderComponentPreview = (Component, props) => {
//     return (
//       <div className="w-full h-32 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
//         <Component {...props} />
//       </div>
//     );
//   };

//   return (
//     <div className="w-64 px-4 py-2">
//       <h2 className="text-lg font-bold mb-4">Components</h2>
//       {componentRegistry.map((comp) => (
//         <div key={comp.name} className="mb-4">
//           <h3 className="text-md font-semibold mb-2">{comp.name}</h3>
//           <div
//             onClick={() => addComponent(comp.name)}
//             className="cursor-pointer"
//           >
//             {renderComponentPreview(comp.component, comp.defaultProps)}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }