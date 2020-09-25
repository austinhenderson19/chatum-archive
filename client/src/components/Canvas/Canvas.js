import React from 'react';

import classes from './Canvas.module.scss';

function Canvas(props) {
  return <div className={classes.Canvas}>{props.children}</div>;
}

export default Canvas;
