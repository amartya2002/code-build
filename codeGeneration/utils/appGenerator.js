import appTemplate from '../templates/appTemplate';

export function generateAppFile(components) {
  const imports = components.map(c => `import ${c.type} from './components/${c.type}';`).join('\n');
  
  const componentJSX = components.map(component => {
    const propsString = Object.entries(component.props)
      .map(([key, value]) => {
        if (typeof value === 'function') {
          return `${key}={${value.toString()}}`;
        }
        return `${key}="${value}"`;
      })
      .join(' ');
    return `      <${component.type} ${propsString} />`;
  }).join('\n');

  return appTemplate(imports, componentJSX);
}