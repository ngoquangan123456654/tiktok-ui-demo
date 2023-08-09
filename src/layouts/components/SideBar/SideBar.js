import config from '~/config';
import MenuAccount from '~/components/MenuAccounts/MenuAccounts';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import Menu, { MenuItem } from './Menu';
import {
  CameraIcon,
  DialIcon,
  HomeIcon,
  UserGroupIcon,
  CameraSolidIcon,
  DialSolidIcon,
  HomeSolidIcon,
  UserGroupSolidIcon,
} from '~/components/Icons';
import Footer from './Footer/Footer';

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <aside className={cx('wrapper')}>
      {/* Menu sidebar */}
      <Menu>
        <MenuItem to={config.routes.home} title="For You" icon={<HomeIcon />} iconActive={<HomeSolidIcon />}></MenuItem>
        <MenuItem
          to={config.routes.following}
          title="Following"
          icon={<UserGroupIcon />}
          iconActive={<UserGroupSolidIcon />}
        ></MenuItem>
        <MenuItem
          to={config.routes.explore}
          title="Explore"
          icon={<DialIcon />}
          iconActive={<DialSolidIcon />}
        ></MenuItem>
        <MenuItem
          to={config.routes.live}
          title="LIVE"
          icon={<CameraIcon />}
          iconActive={<CameraSolidIcon />}
        ></MenuItem>
      </Menu>

      {/*Suggested Account list */}
      <MenuAccount label="Suggested Account"></MenuAccount>

      {/* Following Account list */}
      <MenuAccount label="Following Account"></MenuAccount>

      {/* Footer */}
      <Footer></Footer>
    </aside>
  );
}

export default SideBar;
