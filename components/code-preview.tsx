

// import React, { useState, useEffect } from 'react';
// import { useStore } from '../store/useStore';
// import { generateCode } from '../codeGeneration';
// import JSZip from 'jszip';
// import { saveAs } from 'file-saver';

// // Utility function to flatten nested files
// const flattenFiles = (files, parentPath = '') => {
//   let result = {};
//   Object.entries(files).forEach(([key, value]) => {
//     const newPath = parentPath ? `${parentPath}/${key}` : key;
//     if (typeof value === 'string') {
//       result[newPath] = value;
//     } else {
//       Object.assign(result, flattenFiles(value, newPath)); // Recursively flatten
//     }
//   });
//   return result;
// };

// const CompactCodePreview = () => {
//   const [generatedFiles, setGeneratedFiles] = useState({});
//   const [selectedFile, setSelectedFile] = useState('');
//   const components = useStore(state => state.components);

//   useEffect(() => {
//     const files = generateCode(components);
//     const flatFiles = flattenFiles(files); // Flatten files structure
//     setGeneratedFiles(flatFiles);
//     // Automatically select the first file on load
//     if (Object.keys(flatFiles).length > 0) {
//       setSelectedFile(Object.keys(flatFiles)[0]);
//     }
//   }, [components]);

//   const handleDownload = async () => {
//     const zip = new JSZip();
//     Object.entries(generatedFiles).forEach(([key, value]) => {
//       zip.file(key, value);
//     });
//     const blob = await zip.generateAsync({ type: 'blob' });
//     saveAs(blob, 'generated-code.zip');
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-black-800 text-white py-2 px-4 shadow-md">
//       {/* File Tabs */}
//       <div className="flex overflow-x-auto pb-1 mb-2 border-b border-gray-700">
//         {Object.keys(generatedFiles).map((filename) => (
//           <button
//             key={filename}
//             onClick={() => setSelectedFile(filename)}
//             className={`text-sm px-3 py-1 mr-2 rounded-t-lg ${selectedFile === filename ? 'bg-gray-700' : 'bg-gray-600'} hover:bg-gray-700 transition-colors duration-150`}
//           >
//             {filename}
//           </button>
//         ))}
//       </div>
//       {/* Code Content */}
//       <div className="text-xs bg-gray-900 p-2 rounded-md max-h-32 overflow-auto">
//         {selectedFile ? (
//           <pre>
//             <code>{generatedFiles[selectedFile]}</code>
//           </pre>
//         ) : (
//           <p className="text-gray-400">Select a file to view its content</p>
//         )}
//       </div>
//       {/* Download Button */}
//       <div className="mt-2 text-right">
//         <button 
//           onClick={handleDownload}
//           className="text-sm bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
//         >
//           Download as ZIP
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CompactCodePreview;


// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useStore } from '../store/useStore';
// import { generateCode } from '../codeGeneration';
// import JSZip from 'jszip';
// import { saveAs } from 'file-saver';
// import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
// import { Button } from './ui/button';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"


// // Utility function to flatten nested files
// const flattenFiles = (files, parentPath = '') => {
//   let result = {};
//   Object.entries(files).forEach(([key, value]) => {
//     const newPath = parentPath ? `${parentPath}/${key}` : key;
//     if (typeof value === 'string') {
//       result[newPath] = value;
//     } else {
//       Object.assign(result, flattenFiles(value, newPath)); // Recursively flatten
//     }
//   });
//   return result;
// };

// const CompactCodePreview = () => {
//   const [generatedFiles, setGeneratedFiles] = useState({});
//   const [selectedFile, setSelectedFile] = useState('');
//   const components = useStore((state) => state.components);

//   useEffect(() => {
//     const files = generateCode(components);
//     const flatFiles = flattenFiles(files); // Flatten files structure
//     setGeneratedFiles(flatFiles);

//     // Automatically select the first file on load
//     if (Object.keys(flatFiles).length > 0) {
//       setSelectedFile(Object.keys(flatFiles)[0]);
//     }
//   }, [components]);

//   const handleDownload = async () => {
//     const zip = new JSZip();
//     Object.entries(generatedFiles).forEach(([key, value]) => {
//       zip.file(key, value);
//     });
//     const blob = await zip.generateAsync({ type: 'blob' });
//     saveAs(blob, 'generated-code.zip');
//   };

//   return (
//     <Accordion type="single" collapsible>
//       <AccordionItem value="item-1">
//         <AccordionTrigger className='hover:no-underline'>
//           <Button className='no-underline'>View Code</Button>
//         </AccordionTrigger>
//         <AccordionContent>
//           <div className=" bottom-0 left-0 right-0 bg-white text-white mx-2">
//             {/* Tabs for File Selection */}
//             <Tabs defaultValue={selectedFile} value={selectedFile} onValueChange={setSelectedFile} className="w-full">
//               <TabsList>
//                 {Object.keys(generatedFiles).map((filename) => (
//                   <TabsTrigger
//                     key={filename}
//                     value={filename}
//                   >
//                     {filename}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>

//               {Object.keys(generatedFiles).map((filename) => (
//                 <TabsContent key={filename} value={filename}>
//                   <div className="text-xs bg-slate-900 p-2 rounded-md max-h-32 overflow-auto">
//                     <pre>
//                       <code>{generatedFiles[filename]}</code>
//                     </pre>
//                   </div>
//                 </TabsContent>
//               ))}
//             </Tabs>

//             {/* Download Button */}
//             <div className="mt-4 text-right">
//               <Button
//                 onClick={handleDownload}
//               >
//                 Export Code
//               </Button>
//             </div>
//           </div>
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>


//   );
// };

// export default CompactCodePreview;



// import React, { useState, useEffect } from 'react';
// import { useStore } from '../store/useStore';
// import { generateCode } from '../codeGeneration';
// import JSZip from 'jszip';
// import { saveAs } from 'file-saver';

// // Utility function to flatten nested files
// const flattenFiles = (files, parentPath = '') => {
//   let result = {};
//   Object.entries(files).forEach(([key, value]) => {
//     const newPath = parentPath ? `${parentPath}/${key}` : key;
//     if (typeof value === 'string') {
//       result[newPath] = value;
//     } else {
//       Object.assign(result, flattenFiles(value, newPath)); // Recursively flatten
//     }
//   });
//   return result;
// };

// const CompactCodePreview = () => {
//   const [generatedFiles, setGeneratedFiles] = useState({});
//   const [selectedFile, setSelectedFile] = useState('');
//   const components = useStore(state => state.components);

//   useEffect(() => {
//     const files = generateCode(components);
//     const flatFiles = flattenFiles(files); // Flatten files structure
//     setGeneratedFiles(flatFiles);
//     // Automatically select the first file on load
//     if (Object.keys(flatFiles).length > 0) {
//       setSelectedFile(Object.keys(flatFiles)[0]);
//     }
//   }, [components]);

//   const handleDownload = async () => {
//     const zip = new JSZip();
//     Object.entries(generatedFiles).forEach(([key, value]) => {
//       zip.file(key, value);
//     });
//     const blob = await zip.generateAsync({ type: 'blob' });
//     saveAs(blob, 'generated-code.zip');
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-2 px-4 shadow-md">
//       {/* File Tabs */}
//       <div className="flex overflow-x-auto pb-1 mb-2 border-b border-gray-700">
//         {Object.keys(generatedFiles).map((filename) => (
//           <button
//             key={filename}
//             onClick={() => setSelectedFile(filename)}
//             className={`text-sm px-3 py-1 mr-2 rounded-t-lg ${selectedFile === filename ? 'bg-gray-700' : 'bg-gray-600'} hover:bg-gray-700 transition-colors duration-150`}
//           >
//             {filename}
//           </button>
//         ))}
//       </div>
//       {/* Code Content */}
//       <div className="text-xs bg-gray-900 p-2 rounded-md max-h-32 overflow-auto">
//         {selectedFile ? (
//           <pre>
//             <code>{generatedFiles[selectedFile]}</code>
//           </pre>
//         ) : (
//           <p className="text-gray-400">Select a file to view its content</p>
//         )}
//       </div>
//       {/* Download Button */}
//       <div className="mt-2 text-right">
//         <button 
//           onClick={handleDownload}
//           className="text-sm bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
//         >
//           Download as ZIP
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CompactCodePreview;

"use client"


import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { generateCode } from '../codeGeneration';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

// Utility function to flatten nested files
const flattenFiles = (files, parentPath = '') => {
  let result = {};
  Object.entries(files).forEach(([key, value]) => {
    const newPath = parentPath ? `${parentPath}/${key}` : key;
    if (typeof value === 'string') {
      result[newPath] = value;
    } else {
      Object.assign(result, flattenFiles(value, newPath)); // Recursively flatten
    }
  });
  return result;
};

const CompactCodePreview = () => {
  const [generatedFiles, setGeneratedFiles] = useState({});
  const [selectedFile, setSelectedFile] = useState('');
  const components = useStore((state) => state.components);

  useEffect(() => {
    const files = generateCode(components);
    const flatFiles = flattenFiles(files); // Flatten files structure
    setGeneratedFiles(flatFiles);

    // Automatically select the first file on load
    if (Object.keys(flatFiles).length > 0) {
      setSelectedFile(Object.keys(flatFiles)[0]);
    }
  }, [components]);

  const handleDownload = async () => {
    const zip = new JSZip();
    Object.entries(generatedFiles).forEach(([key, value]) => {
      zip.file(key, value);
    });
    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, 'generated-code.zip');
  };

  return (
    // <Accordion type="single" collapsible>
    //   <AccordionItem value="item-1">
    //     <AccordionTrigger className='hover:no-underline'>
    //       <Button className='no-underline'>View Code</Button>
    //     </AccordionTrigger>
    //     <AccordionContent>
          <div className=" bottom-0 left-0 right-0 bg-white text-white mx-2">
            {/* Tabs for File Selection */}
            <Tabs defaultValue={selectedFile} value={selectedFile} onValueChange={setSelectedFile} className="">
              <TabsList className='overflow-x-scroll max-w-72'>
                {Object.keys(generatedFiles).map((filename) => (
                  <TabsTrigger
                    key={filename}
                    value={filename}
                  >
                    {filename}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.keys(generatedFiles).map((filename) => (
                <TabsContent key={filename} value={filename}>
                  <div className="text-xs bg-slate-900 p-2 rounded-md max-h-32 overflow-auto">
                    <pre>
                      <code>{generatedFiles[filename]}</code>
                    </pre>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* Download Button */}
            <div className="mt-2 text-right">
              <Button
                onClick={handleDownload}
                className="text-sm bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
              >
                Download as ZIP
              </Button>
            </div>
          </div>
    //     </AccordionContent>
    //   </AccordionItem>
    // </Accordion>

  );
};

export default CompactCodePreview;
