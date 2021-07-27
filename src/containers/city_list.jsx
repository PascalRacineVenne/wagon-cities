import React from 'react';

import City from './city';

const CityList = () => {
  return (
    <div className="col-sm-4">
      <p>City List TODO</p>
      {this.props.cities.map((city) => (
        <City key={city.name} city={city} />
      ))}
    </div>
  );
};

export default CityList;
