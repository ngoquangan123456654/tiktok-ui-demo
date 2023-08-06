import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEllipsisVertical,
  faEarthAfrica,
  faCircleQuestion,
  faKeyboard,
  faMoon,
  faChartLine,
  faGear,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '~/layouts/Search';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAfrica}></FontAwesomeIcon>,
    title: 'English',
    // to: '/',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
          // to: '/',
        },
        {
          code: 'vi',
          title: 'Tiếng việt',
          // to: '/',
        },
        {
          code: 'de',
          title: 'Deutsch',
          // to: '/',
        },
        {
          code: 'cn',
          title: '日本語（日本',
          // to: '/',
        },
        {
          code: 'en',
          title: 'English',
          // to: '/',
        },
        {
          code: 'vi',
          title: 'Tiếng việt',
          // to: '/',
        },
        {
          code: 'de',
          title: 'Deutsch',
          // to: '/',
        },
        {
          code: 'cn',
          title: '日本語（日本',
          // to: '/',
        },
        {
          code: 'en',
          title: 'English',
          // to: '/',
        },
        {
          code: 'vi',
          title: 'Tiếng việt',
          // to: '/',
        },
        {
          code: 'de',
          title: 'Deutsch',
          // to: '/',
        },
        {
          code: 'cn',
          title: '日本語（日本',
          // to: '/',
        },
        {
          code: 'en',
          title: 'English',
          // to: '/',
        },
        {
          code: 'vi',
          title: 'Tiếng việt',
          // to: '/',
        },
        {
          code: 'de',
          title: 'Deutsch',
          // to: '/',
        },
        {
          code: 'cn',
          title: '日本語（日本',
          // to: '/',
        },
        {
          code: 'en',
          title: 'English',
          // to: '/',
        },
        {
          code: 'vi',
          title: 'Tiếng việt',
          // to: '/',
        },
        {
          code: 'de',
          title: 'Deutsch',
          // to: '/',
        },
        {
          code: 'cn',
          title: '日本語（日本',
          // to: '/',
        },
        {
          code: 'en',
          title: 'English',
          // to: '/',
        },
        {
          code: 'vi',
          title: 'Tiếng việt',
          // to: '/',
        },
        {
          code: 'de',
          title: 'Deutsch',
          // to: '/',
        },
        {
          code: 'cn',
          title: '日本語（日本',
          // to: '/',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: 'Keyboard shortcuts',
    // to: '/',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>,
    title: 'Dark mode',
    // to: '/',
  },
];
const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;

  // Menu user khi login
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
      title: 'View Profile',
      to: '/profile',
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>,
      title: 'Favorites',
      to: '/favorites',
    },
    {
      icon: <FontAwesomeIcon icon={faBitcoin}></FontAwesomeIcon>,
      title: 'Get Coins',
      to: '/coins',
    },
    {
      icon: <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>,
      title: 'View Analytics',
      to: '/analytics',
    },
    {
      icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Header-logo */}
        <Link to={config.routes.home} className={cx('logo')}>
          <img src={images.logo} alt="Tiktok-Logo"></img>
        </Link>

        {/* Header-SEARCH */}
        <Search></Search>

        {/* Header-action */}
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button textBtn leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                Upload
              </Button>
              <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                <button className={cx('action-btn')}>
                  {/* <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon> */}
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  {/* <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> */}
                  <MessageIcon></MessageIcon>
                  <span className={cx('badge')}>11</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button textBtn leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}

          {/* Menu login */}
          <Menu items={currentUser ? userMenu : MENU_ITEMS}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/358464514_1367772367105082_8265647879181540377_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nxV9h85ivPQAX95RmUw&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBIQxAb4fqi2W7uRPtHhDzGsWHuWv3nO4WbRY31ER6FDA&oe=64CF65FD"
                alt="Dao Ngoc Khanh Van"
              ></Image>
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
