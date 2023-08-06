import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
  children,
  to,
  href,
  onClick,
  className,
  primary = false,
  outline = false,
  textBtn = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  leftIcon = false,
  rightIcon = false,
  ...passProps
}) {
  let Component = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    textBtn,
    rounded,
    disabled,
    small,
    large,
    leftIcon,
    rightIcon,
  });

  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  textBtn: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

export default Button;
