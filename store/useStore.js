import { create } from 'zustand'
import { componentRegistry } from '../utils/componentRegistry'

export const useStore = create((set, get) => ({
  components: [],
  selectedComponent: null,
  undoStack: [],
  redoStack: [],

  // addComponent: (type) => {
  //   set(state => {
  //       // Get the component definition from the registry
  //       const componentDef = componentRegistry[type]
        
  //       // Initialize props with default values
  //       const defaultProps = Object.entries(componentDef.props).reduce((acc, [key, value]) => {
  //         acc[key] = value.default
  //         return acc
  //       }, {})
  
  //       const newComponent = { 
  //         id: Date.now(), 
  //         type, 
  //         props: defaultProps  // Use the default props
  //       }
  //     return { 
  //       components: [...state.components, newComponent],
  //       undoStack: [...state.undoStack, state.components],
  //       redoStack: []
  //     }
  //   })
  // },

  addComponent: (name) => {
    set(state => {
      // Find the component in the registry
      const componentEntry = Object.values(componentRegistry).flatMap(c => Object.entries(c.components)).find(([componentName]) => componentName === name);
      if (!componentEntry) return state; // Handle case where component is not found
      
      const [componentName, componentDef] = componentEntry;
      
      // Initialize props with default values
      const defaultProps = Object.entries(componentDef.props).reduce((acc, [key, value]) => {
        acc[key] = value.default;
        return acc;
      }, {});
  
      const newComponent = { 
        id: Date.now(), 
        type: componentName, 
        props: defaultProps
      };
  
      return { 
        components: [...state.components, newComponent],
        undoStack: [...state.undoStack, state.components],
        redoStack: []
      };
    });
  },
  

  selectComponent: (id) => set(state => ({
    selectedComponent: state.components.find(c => c.id === id)
  })),

  updateComponentProperty: (id, property, value) => {
    set(state => {
      const newComponents = state.components.map(c => 
        c.id === id ? { ...c, props: { ...c.props, [property]: value } } : c
      )
      return { 
        components: newComponents,
        selectedComponent: newComponents.find(c => c.id === id),
        undoStack: [...state.undoStack, state.components],
        redoStack: []
      }
    })
  },

  undo: () => set(state => {
    if (state.undoStack.length === 0) return state
    const prevState = state.undoStack[state.undoStack.length - 1]
    return {
      components: prevState,
      undoStack: state.undoStack.slice(0, -1),
      redoStack: [state.components, ...state.redoStack]
    }
  }),

  redo: () => set(state => {
    if (state.redoStack.length === 0) return state
    const nextState = state.redoStack[0]
    return {
      components: nextState,
      undoStack: [...state.undoStack, state.components],
      redoStack: state.redoStack.slice(1)
    }
  })
}))


// import { create } from 'zustand'
// import { componentRegistry } from '../utils/componentRegistry'

// export const useStore = create((set, get) => ({
//   components: [],
//   selectedComponent: null,
//   undoStack: [],
//   redoStack: [],
//   addComponent: (name) => {
//     set(state => {
//       const componentDef = componentRegistry.find(comp => comp.name === name)
//       if (!componentDef) return state

//       const newComponent = {
//         id: Date.now(),
//         name,
//         props: { ...componentDef.defaultProps }
//       }

//       return {
//         components: [...state.components, newComponent],
//         undoStack: [...state.undoStack, state.components],
//         redoStack: []
//       }
//     })
//   },
//   selectComponent: (id) => set(state => ({
//     selectedComponent: state.components.find(c => c.id === id)
//   })),
//   updateComponentProperty: (id, property, value) => {
//     set(state => {
//       const newComponents = state.components.map(c =>
//         c.id === id ? { ...c, props: { ...c.props, [property]: value } } : c
//       )
//       return {
//         components: newComponents,
//         selectedComponent: newComponents.find(c => c.id === id),
//         undoStack: [...state.undoStack, state.components],
//         redoStack: []
//       }
//     })
//   },
//   undo: () => set(state => {
//     if (state.undoStack.length === 0) return state
//     const prevState = state.undoStack[state.undoStack.length - 1]
//     return {
//       components: prevState,
//       undoStack: state.undoStack.slice(0, -1),
//       redoStack: [state.components, ...state.redoStack]
//     }
//   }),
//   redo: () => set(state => {
//     if (state.redoStack.length === 0) return state
//     const nextState = state.redoStack[0]
//     return {
//       components: nextState,
//       undoStack: [...state.undoStack, state.components],
//       redoStack: state.redoStack.slice(1)
//     }
//   })
// }))