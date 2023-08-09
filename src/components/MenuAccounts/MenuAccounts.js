import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './MenuAccount.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function MenuAccount({ label }) {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('label')}>{label}</h2>
      <AccountItem></AccountItem>
      <AccountItem></AccountItem>
      <AccountItem></AccountItem>
      <AccountItem></AccountItem>
      <AccountItem></AccountItem>
      <button className={cx('see-all-btn')}>
        <p className={cx('see-all-text')}>See More</p>
      </button>
    </div>
  );
}

MenuAccount.propTypes = {
  label: PropTypes.string.isRequired,
};

export default MenuAccount;
