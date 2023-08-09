import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './MenuAccount.module.scss';

import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ showTooltip = true }) {
  const renderPreview = (props) => {
    return (
      <div tabIndex={-1} {...props}>
        {showTooltip && (
          <PopperWrapper>
            <AccountPreview></AccountPreview>
          </PopperWrapper>
        )}
      </div>
    );
  };

  return (
    <Tippy
      interactive
      // visible
      delay={[800, 0]}
      placement="bottom"
      render={renderPreview}
    >
      <div className={cx('account-item')}>
        <Image
          className={cx('avatar')}
          src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/358464514_1367772367105082_8265647879181540377_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nxV9h85ivPQAX95RmUw&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBIQxAb4fqi2W7uRPtHhDzGsWHuWv3nO4WbRY31ER6FDA&oe=64CF65FD"
          alt="Dao Ngoc Khanh Van"
        ></Image>
        <div className={cx('info')}>
          <h4 className={cx('username')}>
            <span>khanhvan1126</span>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
          </h4>
          <span className={cx('name')}>Khanh Van</span>
        </div>
      </div>
    </Tippy>
  );
}

AccountItem.propTypes = {
  showTooltip: PropTypes.bool,
};

export default AccountItem;
