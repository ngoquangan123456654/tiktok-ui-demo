import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, iconActive }) {
  return (
    <NavLink to={to} className={({ isActive }) => cx('menu-item', { active: isActive })}>
      {({ isActive }) => (
        <>
          {isActive ? iconActive : icon}
          <span className={cx('menu-item-title')}>{title}</span>
        </>
      )}
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  iconActive: PropTypes.node.isRequired,
};

export default MenuItem;
