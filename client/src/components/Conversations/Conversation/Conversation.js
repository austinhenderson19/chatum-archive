import React from 'react';

import classes from './Conversation.module.scss';

const Conversation = (props) => {
  let notification =
    props.notifications && props.notifications !== 0 ? (
      <div className={classes.notification}>{props.notifications}</div>
    ) : (
      ''
    );

  return (
    <div
      className={`${classes.container} ${props.active ? classes['container--active'] : ''}`}
      onClick={() => props.setSelected(props.id)}
    >
      <div className={classes.img}></div>
      <div className={classes.content}>
        <div className={classes.content__heading}>{props.name}</div>
        <div className={classes.content__subHeading}>{props.job}</div>
      </div>
      {notification}
    </div>
  );
};

export default Conversation;
