import React from 'react';
import ViterraLogo from '../images/Viterra.svg';

function Logo() {
  return (
    <div className="flex justify-center items-center mb-6">
      <img src={ViterraLogo} alt="Viterra Logo" className="h-16 w-auto" />
    </div>
  );
}

export default Logo;
