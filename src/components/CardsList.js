import React from 'react';
import Card from './Card';

const CardsList = (props) => {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-around p-4 ">
      {props.children}
      {props.robos.map((robo) => (
        <div key={robo.id}>
          <Card name={robo.name} phone={robo.phone} />
        </div>
      ))}
    </div>
  );
};

export default CardsList;
