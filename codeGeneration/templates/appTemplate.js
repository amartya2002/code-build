export default function appTemplate(componentImports, componentJSX) {
  return `
import React from 'react';
${componentImports}
import './styles.css';

const App = () => {
  return (
    <div className="app">
${componentJSX}
    </div>
  );
};

export default App;
`.trim();
}