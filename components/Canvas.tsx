// import { useStore } from '../store/useStore'
// import RenderedComponent from './RenderedComponent'

// export default function Canvas() {
//   const { components, selectComponent } = useStore()

//   return (
//     <div className="flex-grow m-4 p-4 bg-white border-4 border-yellow-50 rounded-xl">
//       {components.map(component => (
//         <div key={component.id} onClick={() => selectComponent(component.id)}>
//           <RenderedComponent type={component.type} props={component.props} />
//         </div>
//       ))}
//     </div>
//   )
// }


import { useStore } from '../store/useStore';
import RenderedComponent from './RenderedComponent';
import { useState, useEffect, useRef } from 'react';
import { FaMobileAlt, FaTabletAlt, FaDesktop } from 'react-icons/fa';

export default function Canvas() {
  const { components, selectComponent } = useStore();
  const [breakpoint, setBreakpoint] = useState('desktop');
  const [scale, setScale] = useState(1);
  const canvasRef = useRef(null);

  // Define breakpoint dimensions
  const breakpoints = {
    mobile: { width: 320, height: 300 },
    tablet: { width: 768, height: 300 },
    desktop: { width: 1024, height: 300 },
  };

  // Handle zoom in and zoom out actions
  const handleZoomIn = () => setScale((prevScale) => Math.min(prevScale + 0.1, 2));
  const handleZoomOut = () => setScale((prevScale) => Math.max(prevScale - 0.1, 0.5));

  const handleWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      e.deltaY < 0 ? handleZoomIn() : handleZoomOut();
    }
  };

  // Set up event listeners for zooming
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
        if (e.key === '=' || e.key === '+') {
          handleZoomIn();
        } else if (e.key === '-') {
          handleZoomOut();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Get current breakpoint dimensions
  const canvasSize = breakpoints[breakpoint];

  // Calculate zoom percentage
  const zoomPercentage = Math.round(scale * 100);

  return (
    <div className="flex flex-col h-[400px] items-center mb-4">
      {/* Breakpoint Selector */}
      <div className="mb-4 flex space-x-2 ml-auto mx-4 ">
        <button
          onClick={() => setBreakpoint('mobile')}
          className={`p-2 rounded-full ${breakpoint === 'mobile' ? 'bg-blue-500 text-white' : 'bg-stone-50'}`}
        >
          <FaMobileAlt />
        </button>
        <button
          onClick={() => setBreakpoint('tablet')}
          className={`p-2 rounded-full ${breakpoint === 'tablet' ? 'bg-blue-500 text-white' : 'bg-stone-50'}`}
        >
          <FaTabletAlt />
        </button>
        <button
          onClick={() => setBreakpoint('desktop')}
          className={`p-2 rounded-full ${breakpoint === 'desktop' ? 'bg-blue-500 text-white' : 'bg-stone-50'}`}
        >
          <FaDesktop />
        </button>
      </div>

      {/* Fixed Size Outer Container */}
      <div className="relative w-[800px] h-[600px] bg-zinc-50 rounded-xl overflow-hidden flex items-center justify-center">
        {/* Dynamic Inner Canvas */}
        <div
          ref={canvasRef}
          className="bg-white overflow-y-scroll"
          style={{
            width: `${canvasSize.width}px`,
            height: `${canvasSize.height}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          {components.map((component) => (
            <div key={component.id} onClick={() => selectComponent(component.id)}>
              <RenderedComponent type={component.type} props={component.props} />
            </div>
          ))}
        </div>

        {/* Zoom Controls inside Canvas */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-2">
          <button onClick={handleZoomOut} className="px-2 py-1 bg-gray-300 rounded">-</button>
          <span className="text-gray-700">{zoomPercentage}%</span>
          <button onClick={handleZoomIn} className="px-2 py-1 bg-gray-300 rounded">+</button>
        </div>
      </div>
    </div>
  );
}





