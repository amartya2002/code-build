// utils/componentRegistry.js
export const componentRegistry = {
  Buttons: {
    components: {
      PrimaryButton: {
        component: ({ children, onClick }) => (
          <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
            {children}
          </button>
        ),
        props: {
          children: { type: 'string', default: 'Primary Button' },
          onClick: { type: 'function', default: () => {} }
        },
        thumbnail: 'https://via.placeholder.com/150?text=Primary+Button'
      },
      SecondaryButton: {
        component: ({ children, onClick }) => (
          <button onClick={onClick} className="px-4 py-2 bg-gray-500 text-white rounded">
            {children}
          </button>
        ),
        props: {
          children: { type: 'string', default: 'Secondary Button' },
          onClick: { type: 'function', default: () => {} }
        },
        thumbnail: 'https://via.placeholder.com/150?text=Secondary+Button'
      }
    }
  },
  Cards: {
    components: {
      BasicCard: {
        component: ({ title, content }) => (
          <div className="p-4 bg-white border rounded">
            <h2 className="text-black">{title}</h2>
            <p className="text-gray-500">{content}</p>
          </div>
        ),
        props: {
          title: { type: 'string', default: 'Card Title' },
          content: { type: 'string', default: 'Card content' }
        },
        thumbnail: 'https://via.placeholder.com/150?text=Basic+Card'
      },
      AdvancedCard: {
        component: ({ title, content, footer }) => (
          <div className="p-4 bg-white border rounded">
            <h2 className="text-black">{title}</h2>
            <p className="text-gray-500">{content}</p>
            <div className="mt-2 text-gray-600">{footer}</div>
          </div>
        ),
        props: {
          title: { type: 'string', default: 'Card Title' },
          content: { type: 'string', default: 'Card content' },
          footer: { type: 'string', default: 'Card footer' }
        },
        thumbnail: 'https://via.placeholder.com/150?text=Advanced+Card'
      }
    }
  }
};



// import Button from './reusable-components/Button'
// import Card from './reusable-components/Card';

// export const componentRegistry = {
//   Button: {
//     component: Button,
//     props: {
//       children: { type: 'string', default: 'Click me' },
//       onClick: { type: 'function', default: () => {} }
//     }
//   },
//   Card: {
//     component: Card,
//     props: {
//       title: { type: 'string', default: 'Card Title' },
//       content: { type: 'string', default: 'Card content' }
//     }
//   }
// };



// import { Button, SimpleCard, FancyCard } from './reusable-components/Components';
// import { SimpleCard } from '../components/SimpleCard';
// import { FancyCard } from '@/utils/reusable-components/FancyCard';
// import { SimpleCard } from '@/utils/reusable-components/SimpleCard';
// import { Button } from '@/utils/reusable-components/Button';



// export const componentRegistry = [
//   {
//     name: 'Button',
//     component: Button,
//     defaultProps: { children: 'Click me' }
//   },
//   {
//     name: 'SimpleCard',
//     component: SimpleCard,
//     defaultProps: { title: 'Simple Card', content: 'This is a simple card.' }
//   },
//   {
//     name: 'FancyCard',
//     component: FancyCard,
//     defaultProps: { title: 'Fancy Card', content: 'This is a fancy card.' }
//   }
// ];