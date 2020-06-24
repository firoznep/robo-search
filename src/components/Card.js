import React from 'react';
import '../styles/card-style.css';

const Card = (props) => {
  return (
    <div className="card m-2 text-center card-style ">
      <img
        src={`https://robohash.org/${props.name}?set=any&size=200x200`}
        alt="robo"
      />
      <div className="card-body bg-secondary mt-2 text-white">
        <h3 className="card-title">{props.name}</h3>
        <p className="lead">{props.phone}</p>
      </div>
    </div>
  );
};

export default Card;
