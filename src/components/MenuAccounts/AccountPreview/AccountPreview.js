import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';

import Image from '~/components/Image';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <Image
          className={cx('avatar')}
          src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/358464514_1367772367105082_8265647879181540377_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nxV9h85ivPQAX95RmUw&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBIQxAb4fqi2W7uRPtHhDzGsWHuWv3nO4WbRY31ER6FDA&oe=64CF65FD"
          alt="Dao Ngoc Khanh Van"
        ></Image>
        <Button outline className={cx('header-btn')}>
          Follow
        </Button>
      </header>
      <a href="/" className={cx('username')}>
        khanhvan2611
        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
      </a>
      <a href="/" className={cx('name')}>
        Khanh Van
      </a>
      <p className={cx('user-stat')}>
        <span className={cx('user-stat-text')}>19.3K</span>
        <span className={cx('user-stat-desc')}>Followers</span>
        <span className={cx('user-stat-text')}>219.3K</span>
        <span className={cx('user-stat-desc')}>Likes</span>
      </p>
      <p className={cx('user-bio')}>LOVE COACHER_JOURNALIST Other tv: @snowtv66 Mail: dưới</p>
    </div>
  );
}

export default AccountPreview;
