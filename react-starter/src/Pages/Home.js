import React, { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    console.log('Test');
  }, []);

  return (
    <div className="Home">
        {'Test'}
    </div>
  );
};

export { Home };
