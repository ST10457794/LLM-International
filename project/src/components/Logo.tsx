import React from 'react';
import MyLogo from '../assets/my-logo.jpg'; 


const Logo: React.FC = () => {
  return (
    <img
      src={MyLogo}
      alt="My Logo"
      width={40}
      height={40}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default Logo;