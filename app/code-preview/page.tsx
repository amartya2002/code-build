// 'use client'

// import React, { useState, useEffect } from 'react';
// import { useStore } from '../../store/useStore';
// import { generateCode } from '../../codeGeneration';
// import FileTree from '../../components/FileTree';
// import CodeTab from '../../components/Codetab';
// import JSZip from 'jszip';
// import { saveAs } from 'file-saver';

// export default function CodePreviewPage() {
//   const [generatedFiles, setGeneratedFiles] = useState({});
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [selectedFileContent, setSelectedFileContent] = useState('');
//   const components = useStore(state => state.components);

//   useEffect(() => {
//     const files = generateCode(components);
//     setGeneratedFiles(files);
//   }, [components]);

//   const handleSelectFile = (filename, content) => {
//     setSelectedFile(filename);
//     setSelectedFileContent(content);
//   };

//   const handleDownload = async () => {
//     const zip = new JSZip();
    
//     const flattenFiles = (obj, currentPath = '') => {
//       Object.entries(obj).forEach(([key, value]) => {
//         const newPath = currentPath ? `${currentPath}/${key}` : key;
//         if (typeof value === 'string') {
//           zip.file(newPath, value);
//         } else {
//           flattenFiles(value, newPath);
//         }
//       });
//     };

//     flattenFiles(generatedFiles);
    
//     const blob = await zip.generateAsync({ type: 'blob' });
//     saveAs(blob, 'generated-code.zip');
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Generated Code Preview</h1>
//       <div className="flex flex-col md:flex-row">
//         <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
//           <h2 className="text-xl font-bold mb-4">File Structure</h2>
//           <div className="bg-gray-100 rounded p-4">
//             <FileTree files={generatedFiles} onSelectFile={handleSelectFile} />
//           </div>
//           <button 
//             onClick={handleDownload}
//             className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
//           >
//             Download as ZIP
//           </button>
//         </div>
//         <div className="w-full md:w-2/3">
//           <h2 className="text-xl font-bold mb-4">File Content</h2>
//           <div className="border rounded p-4 bg-white">
//             {selectedFile ? (
//               <CodeTab filename={selectedFile} code={selectedFileContent} />
//             ) : (
//               <p className="text-gray-500 italic">Select a file to view its content</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client'

import React, { useState, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { generateCode } from '../../codeGeneration';
import FileTree from '../../components/FileTree';
import CodeTab from '../../components/Codetab';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const CodePreviewPage = () => {
  const [generatedFiles, setGeneratedFiles] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileContent, setSelectedFileContent] = useState('');
  const components = useStore(state => state.components);

  useEffect(() => {
    const files = generateCode(components);
    setGeneratedFiles(files);
  }, [components]);

  const handleSelectFile = (filename, content) => {
    setSelectedFile(filename);
    setSelectedFileContent(content);
  };

  const handleDownload = async () => {
    const zip = new JSZip();
    const flattenFiles = (obj, currentPath = '') => {
      Object.entries(obj).forEach(([key, value]) => {
        const newPath = currentPath ? `${currentPath}/${key}` : key;
        if (typeof value === 'string') {
          zip.file(newPath, value);
        } else {
          flattenFiles(value, newPath);
        }
      });
    };

    flattenFiles(generatedFiles);
    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, 'generated-code.zip');
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-6 p-4 bg-gray-100 rounded-lg shadow-md">
      {/* File Structure Section */}
      <div className="w-full lg:w-1/3 bg-white p-4 rounded-md shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">File Structure</h2>
        <div className="overflow-y-auto max-h-80 bg-gray-50 rounded-md p-3 border">
          <FileTree files={generatedFiles} onSelectFile={handleSelectFile} />
        </div>
        <button 
          onClick={handleDownload}
          className="mt-4 w-full px-3 py-2 bg-blue-600 text-white rounded-md font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Download as ZIP
        </button>
      </div>
      {/* File Content Section */}
      <div className="w-full lg:w-2/3 bg-white p-4 rounded-md shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">File Content</h2>
        <div className="border rounded-md p-3 bg-gray-50 overflow-y-auto max-h-80">
          {selectedFile ? (
            <CodeTab filename={selectedFile} code={selectedFileContent} />
          ) : (
            <p className="text-gray-500 italic">Select a file to view its content</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodePreviewPage;
