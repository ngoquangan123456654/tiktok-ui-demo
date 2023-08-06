import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItems';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, hideOnClick = false, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParents = !!item.children;

      return (
        <MenuItems
          key={index}
          data={item}
          onCLick={() => {
            if (isParents) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        ></MenuItems>
      );
    });
  };

  return (
    <Tippy
      interactive
      // visible
      delay={[0, 700]}
      offset={[12, 10]}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              ></Header>
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  hideOnClick: PropTypes.bool,
  items: PropTypes.array,
};

export default Menu;
