import React from 'react';

const City = ({ city }) => {
  return (
    <div className="list-group-item">
      {city.name} {city.address} {city.slug}
    </div>
  );
}

export default City;
