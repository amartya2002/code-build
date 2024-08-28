export const componentRegistry = {
    Button: {
      component: ({ children, onClick }) => (
        <button onClick={onClick} className="px-4 py-1.5 bg-blue-500 text-white rounded">
          {children}
        </button>
      ),
      props: {
        children: { type: 'string', default: 'Click me' },
        onClick: { type: 'function', default: () => {} }
      }
    },
    Card: {
      component: ({ title, content }) => (
        <div className="p-4 bg-white border rounded">
          <h2 className="text-black">{title}</h2>
          <p className="text-red-500">{content}</p>
        </div>
      ),
      props: {
        title: { type: 'string', default: 'Card Title' },
        content: { type: 'string', default: 'Card content' }
      }
    }
  }

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