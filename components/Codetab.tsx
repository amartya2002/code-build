import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeTab({ filename, code }) {
  const language = filename.endsWith('.js') ? 'javascript' : 
                   filename.endsWith('.css') ? 'css' :
                   filename.endsWith('.json') ? 'json' : 'text';

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{filename}</h2>
      <SyntaxHighlighter language={language} style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}