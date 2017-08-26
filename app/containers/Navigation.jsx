import React       from 'react';
import { Link }    from 'react-router';
import { connect } from 'react-redux';
import classNames  from 'classnames/bind';

import styles      from '../css/components/navigation.css';

const cx = classNames.bind(styles);

const Navigation = () => {
    return (
      <nav className={cx('navigation')} role="navigation">
        <Link to="/" className={cx('item', 'logo')} activeClassName={cx('active')}>cma</Link>
        <Link to="/about" className={cx('item')} activeClassName={cx('active')}>About</Link>
      </nav>
    );
};

function mapStateToProps(state) {
  return {
           
         };
}

export default connect(mapStateToProps)(Navigation);
