'use client'
declare global {
    interface Window {
      Calendly: any;
    }
  }
  
  import React from 'react';
  import 'app/globals.css'
  
  function CalendlyWidget() {
    React.useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/d/3b2-hkg-zqs/desync-demo-call?background_color=1a1a1a&text_color=ffffff',
          text: 'Schedule time with us',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: undefined,
        });
      };
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <>
        <link 
          href="https://assets.calendly.com/assets/external/widget.css" 
          rel="stylesheet" 
        />

      </>
    );
  }
  
  export default CalendlyWidget;
  