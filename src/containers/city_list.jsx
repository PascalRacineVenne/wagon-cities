import React from 'react';

import City from './city';

const CityList = ({ cities }) => {

  componentWillMount () {

  }

  return (
    <div className="col-sm-4 cities">
      <p>City List TODO_left</p>
      {cities.map(city => (
        <City
          city={city}
          key={city.name}
        />
      ))}
    </div>
  );
};

export default CityList;
