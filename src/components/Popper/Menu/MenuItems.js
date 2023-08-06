import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function MenuItems({ data, onCLick }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });

  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onCLick}>
      {data.title}
    </Button>
  );
}

MenuItems.propTypes = {
  data: PropTypes.object.isRequired,
  onCLick: PropTypes.func,
};

export default MenuItems;
