import React, { Fragment } from 'react';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Main from './Components/Main';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
