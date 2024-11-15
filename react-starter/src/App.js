import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './Pages/Home';

const App = () => {
  return (
    <div className='co-capt-example'>
      <Home />
    </div>
  );
};

export default App;
