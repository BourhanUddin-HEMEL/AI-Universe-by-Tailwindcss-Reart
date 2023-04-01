import React from 'react';
import Button from './components/Buttoon/Button';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header></Header>
      <Button>Sort By Date</Button>
      <Cart></Cart>
      {/* <Button>See More</Button> */}
    </>
  );
};

export default App;