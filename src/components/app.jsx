import React from 'react';

import CityList from '../components/CityList';
import ActiveCity from '../components/ActiveCity';

const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;
