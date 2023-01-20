import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Items from './components/Content/Items';
import Footer from './components/Footer/Footer';
import Payments from './components/Payment/Payments';

const  App = () => {
  return (
    <>
    <NavBar />
    {/* <Items /> */}
    <Payments />
    <Footer />
    </>
  )}

export default App;
