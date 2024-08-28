export const SimpleCard = ({ title = 'Simple Card', content = 'This is a simple card.' }) => (
  <div className="p-4 bg-white border rounded">
    <h2 className="text-lg font-bold">{title}</h2>
    <p className="text-gray-600">{content}</p>
  </div>
);