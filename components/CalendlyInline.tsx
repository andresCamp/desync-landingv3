'use client'
import React from 'react';

function CalendlyInline() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget"
      data-url="https://calendly.com/d/3b2-hkg-zqs/desync-demo-call?background_color=121212&text_color=ffffff" 
      style={{ minWidth: '320px', height: '700px' }}
    ></div>
  );
}

export default CalendlyInline;
