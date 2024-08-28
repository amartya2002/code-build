import React from 'react';

const FileTree = ({ files, onSelectFile }) => {
  const renderTree = (structure, path = '') => {
    return Object.entries(structure).map(([key, value]) => {
      const fullPath = path ? `${path}/${key}` : key;
      if (typeof value === 'string') {
        return (
          <div key={fullPath} className="ml-4">
            <button 
              onClick={() => onSelectFile(fullPath, value)}
              className="text-blue-500 hover:underline"
            >
              {key}
            </button>
          </div>
        );
      }
      return (
        <div key={fullPath} className="ml-4">
          <div className="font-bold">{key}</div>
          {renderTree(value, fullPath)}
        </div>
      );
    });
  };

  return <div className="p-4 bg-gray-100">{renderTree(files)}</div>;
};

export default FileTree;