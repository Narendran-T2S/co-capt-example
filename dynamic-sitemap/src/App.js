import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './Pages/Home';
import { TOAST_CONFIG } from './config';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='co-capt-example'>
      <Home />
      <ToastContainer
        {...TOAST_CONFIG}
      />
    </div>
  );
};

export default App;
