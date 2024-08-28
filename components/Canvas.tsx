import { useStore } from '../store/useStore'
import RenderedComponent from './RenderedComponent'

export default function Canvas() {
  const { components, selectComponent } = useStore()

  return (
    <div className="flex-grow m-4 p-4 bg-white border-4 border-yellow-50 rounded-xl">
      {components.map(component => (
        <div key={component.id} onClick={() => selectComponent(component.id)}>
          <RenderedComponent type={component.type} props={component.props} />
        </div>
      ))}
    </div>
  )
}