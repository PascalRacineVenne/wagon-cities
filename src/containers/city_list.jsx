import React from 'react';

import City from './city';

const CityList = ({ cities }) => {
  return (
    <div className="col-sm-4">
      <p>City List TODO</p>
      {cities.map((city) => (
        <City
          key={city.id}
          data={city}
        />
      ))};
    </div>
  );
};

export default CityList;
