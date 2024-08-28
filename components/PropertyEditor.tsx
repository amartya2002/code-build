"use client"
import { useStore } from '../store/useStore'
import { componentRegistry } from '../utils/componentRegistry'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PropertyEditor() {
  const { selectedComponent, updateComponentProperty } = useStore()

  if (!selectedComponent) return <div className="w-64 p-4">Select a component to edit properties</div>

  const componentDef = componentRegistry[selectedComponent.type]

  return (
    <div className="w-64 p-4">
      <h2 className="text-lg font-bold mb-4">Properties</h2>
      {Object.entries(componentDef.props).map(([propName, propDef]) => (
        <div key={propName} className="mb-4">
          <Label className="block mb-2">{propName}</Label>
          <Input
            type="text"
            value={selectedComponent.props[propName] || ''}
            onChange={(e) => updateComponentProperty(selectedComponent.id, propName, e.target.value)}
          />
        </div>
      ))}
    </div>
  )
}