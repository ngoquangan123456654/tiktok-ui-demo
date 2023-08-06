import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';
import images from '~/assets/images';

const Image = forwardRef(({ className, src, alt, fallBack: customFallBack = images.noImage, ...props }, ref) => {
  const [fallBack, setFallBack] = useState('');

  const handleError = () => {
    setFallBack(customFallBack);
  };

  return (
    <img
      className={classNames(className, styles.wrapper)}
      {...props}
      ref={ref}
      src={fallBack || src}
      alt={alt}
      onError={handleError}
    ></img>
  );
});

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallBack: PropTypes.string,
};

export default Image;
