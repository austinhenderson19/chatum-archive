import React from 'react';

import sprite from '../../assets/svg/sprite.svg';
import classes from './ChatHeader.module.scss';

const ChatHeader = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.person}>
        <div className={classes.person__img}></div>
        <div className={classes.content}>
          <div className={classes.content__heading}>{props.name}</div>
          <div className={classes.content__subHeading}>{props.job}</div>
        </div>
      </div>
      <div className={classes.settings}>
        <svg className={`${classes.settings__icon} ${classes.settings__phone}`}>
          <use href={`${sprite}#icon-phone`}></use>
        </svg>
        <svg className={`${classes.settings__icon} ${classes.settings__bell}`}>
          <use href={`${sprite}#icon-bell`}></use>
        </svg>
        <svg className={`${classes.settings__icon} ${classes.settings__cog}`}>
          <use href={`${sprite}#icon-cog`}></use>
        </svg>
      </div>
    </div>
  );
};

export default ChatHeader;
