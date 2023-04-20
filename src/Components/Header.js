import React from 'react';

const Header = () => {
  return (
    <header>
      <img
        src={require('../assets/logo-nav.png')}
        alt="Little Lemon logo"
        className="nav-image"
      ></img>
    </header>
  );
};

export default Header;
