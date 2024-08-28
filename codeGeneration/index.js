import { generateComponentFile } from './utils/componentGenerator';
import { generateAppFile } from './utils/appGenerator';
import indexTemplate from './templates/indexTemplate';
import stylesTemplate from './templates/stylesTemplate';
// import { generatePackageJson } from './utils/packageGenerator';

export function generateCode(components) {
  const files = {
    src: {
      'index.js': indexTemplate(),
      'App.js': generateAppFile(components),
      'styles.css': stylesTemplate(),
      components: {}
    },
    // 'package.json': generatePackageJson(),
  };

  // Generate individual component files
  components.forEach(component => {
    files.src.components[`${component.type}.js`] = generateComponentFile(component.type, component.props);
  });

  return files;
}