import React, { Fragment } from 'react';

import classes from './Layout.module.scss';

const Layout = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <section className={classes.main}>{props.children}</section>
      </div>
    </Fragment>
  );
};

export default Layout;
