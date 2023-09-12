import React from 'react';

function CalendlyLink() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const linkStyle = document.createElement('link');
    linkStyle.rel = 'stylesheet';
    linkStyle.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(linkStyle);
    
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(linkStyle);
    };
  }, []);

  const handleClick = () => {
    (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/d/3b2-hkg-zqs/desync-demo-call' });
    return false;
  };

  return (
    <a href="" onClick={handleClick}>Let's Talk!</a>
  );
}

export default CalendlyLink;
