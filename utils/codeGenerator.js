import { componentRegistry } from './componentRegistry'

export function generateCode(components) {
  const imports = `import React from 'react'`

  const componentCode = components.map(component => {
    const { type, props } = component
    const componentDef = componentRegistry[type]
    const propsString = Object.entries(props)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ')
    return `<${type} ${propsString} />`
  }).join('\n    ')

  return `
${imports}

export default function GeneratedPage() {
  return (
    <div>
      ${componentCode}
    </div>
  )
}
  `.trim()
}

