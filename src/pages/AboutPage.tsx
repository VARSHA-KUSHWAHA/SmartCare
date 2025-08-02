import React, { useEffect } from 'react';

export const AboutPage: React.FC = () => {
  // Add console log to verify component is loading
  useEffect(() => {
    console.log('AboutPage is rendering!');
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 bg-yellow-100"> {/* Added background for visibility */}
      <h1 className="text-3xl font-bold mb-8">About SmartCare</h1>
      <p>We are a leading healthcare provider with state-of-the-art facilities.</p>
      <p className="mt-4">If you see this text, the page is rendering.</p>
    </div>
  );
};