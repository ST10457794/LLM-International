import React, { useState } from 'react';

const CookieConsent = () => {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col sm:flex-row items-center justify-between z-50">
      <p className="text-sm mb-2 sm:mb-0">
        We use cookies to improve your experience. By using our site, you accept cookies.
      </p>
      <button
        className="bg-gold text-charcoal px-4 py-2 text-sm rounded hover:bg-yellow-400"
        onClick={() => setAccepted(true)}
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
