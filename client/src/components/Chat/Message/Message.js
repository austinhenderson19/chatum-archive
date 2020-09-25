import React from 'react';

import classes from './Message.module.scss';

const Message = (props) => {
  return (
    <div className={props.from.id == 1 ? classes.container : classes.container__right}>
      <div className={props.from.id == 1 ? classes.img : classes.img__right}></div>
      <div className={props.from.id == 1 ? classes.message : classes.message__right}>{props.content}</div>
      <div className={props.from.id == 1 ? classes.time : classes.time__right}>4:15pm</div>
    </div>
  );
};

export default Message;
