// CalculateButton.js
import React from 'react';
import '../index.css'


function CalculateButton({ onClick, disabled, shake }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`mt-8 px-6 py-3 rounded-full shadow-md transition-all duration-200 ease-in-out transform focus:outline-none ${
        disabled
          ? 'bg-gray-400 text-gray-200 cursor-not-allowed select-none'
          : 'bg-blue-500 hover:bg-blue-600 text-white'
      } ${shake ? 'shake' : ''}`} // Aplica la clase shake cuando el estado lo indique
    >
      Calculate
    </button>
  );
}

export default CalculateButton;