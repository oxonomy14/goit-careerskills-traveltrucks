import React from 'react';
import css from './NotFound.module.css';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
      
        <h3 className={css.subTitleAlert}>Nothing found</h3>
        <div className={css.btnGoBack}>
          <Link className={css.btnText} to="/">
            Go To HomePage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
