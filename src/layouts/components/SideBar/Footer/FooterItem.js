import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function FooterItem({ title, href }) {
  return (
    <a href={href} className={cx('footer-item')}>
      {title}
    </a>
  );
}

FooterItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default FooterItem;
