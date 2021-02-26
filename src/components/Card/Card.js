import React from 'react';
import classes from './Card.module.scss';

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.container}>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
