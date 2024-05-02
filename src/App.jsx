import React from 'react';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import OddProducts from './Components/OddProducts';
import Salats from './Components/Salats';
import Drink from './Components/Drink';
import Info from './Components/Info';
import Telegram from './Components/Telegram';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Menu/>
      <OddProducts/>
      <Salats/>
      <Drink/>
      <Info/>
      <Telegram/>
      <Footer/>
    </div>
  );
}

export default App;
