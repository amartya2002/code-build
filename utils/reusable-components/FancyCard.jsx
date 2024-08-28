export const FancyCard = ({ title = 'Fancy Card', content = 'This is a fancy card.' }) => (
    <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 border rounded shadow-lg">
      <h2 className="text-lg font-bold text-white">{title}</h2>
      <p className="text-white mt-2">{content}</p>
    </div>
  );