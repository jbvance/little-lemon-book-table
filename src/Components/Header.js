import React from 'react';
import Nav from './Nav';
import '../styles/Header.css';

const Header = () => {
  return (
    <header class="header">
      <div class="logo">
        {' '}
        <img src={require('../assets/logo.png')} alt="Little Lemon logo"></img>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
