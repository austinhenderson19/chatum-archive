import React from 'react';

import sprite from '../../assets/svg/sprite.svg';
import classes from './Search.module.scss';

const Search = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes['search-container']}>
        <div className={classes.search}>
          <button className={classes.search__button}>
            <svg className={classes.search__svg}>
              <use href={`${sprite}#icon-search`}></use>
            </svg>
          </button>
          <input
            className={classes.search__input}
            onChange={props.setFilter}
            placeholder="Search conversations here..."
          />
        </div>
      </div>
      <div className={classes['edit-container']}>
        <div className={classes.edit}>
          <svg className={classes.edit__svg}>
            <use href={`${sprite}#icon-pencil`}></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Search;
