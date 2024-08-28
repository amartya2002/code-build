// components/Button.jsx


export const Button = ({ children = 'Click me', onClick = () => {} }) => (
  <button onClick={onClick} className="px-4 py-1.5 bg-blue-500 text-white rounded">
    {children}
  </button>
);

// components/SimpleCard.jsx


export const SimpleCard = ({ title = 'Simple Card', content = 'This is a simple card.' }) => (
  <div className="p-4 bg-white border rounded">
    <h2 className="text-lg font-bold">{title}</h2>
    <p className="text-gray-600">{content}</p>
  </div>
);

// components/FancyCard.jsx


export const FancyCard = ({ title = 'Fancy Card', content = 'This is a fancy card.' }) => (
  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 border rounded shadow-lg">
    <h2 className="text-lg font-bold text-white">{title}</h2>
    <p className="text-white mt-2">{content}</p>
  </div>
);