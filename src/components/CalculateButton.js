import React from 'react';

function CalculateButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-8 px-6 py-3 bg-bgGray rounded-full shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none transition-all duration-200 ease-in-out"
    >
      Calculate Total Hours
    </button>
  );
}

export default CalculateButton;
