import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import FooterItem from './FooterItem';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('footer-container')}>
        <FooterItem title="About" href="https://www.tiktok.com/about?lang=en" />
        <FooterItem title="Newsroom" href="https://www.tiktok.com/about?lang=en" />
        <FooterItem title="Contact" href="https://www.tiktok.com/about?lang=en" />
        <FooterItem title="Career" href="https://www.tiktok.com/about?lang=en" />
      </div>
      <div className={cx('footer-container')}>
        <FooterItem title="Tiktok for good" href="https://www.tiktok.com/about?lang=en" />
        <FooterItem title="Advertise" href="https://www.tiktok.com/about?lang=en" />
        <FooterItem title="Developers" href="https://www.tiktok.com/about?lang=en" />
        <FooterItem title="Transparency" href="https://www.tiktok.com/about?lang=en" />
        <FooterItem title="Tiktok rewards" href="https://www.tiktok.com/about?lang=en" />
        <FooterItem title="Tiktok embeds" href="https://www.tiktok.com/about?lang=en" />
      </div>
      <div className={cx('footer-container')}>
        <FooterItem title="Help" href="https://www.tiktok.com/about?lang=en" />
        <FooterItem title="Safety" href="https://www.tiktok.com/about?lang=en" />
        <FooterItem title="Term" href="https://www.tiktok.com/about?lang=en" />
        <FooterItem title="Privacy" href="https://www.tiktok.com/about?lang=en" />
        <FooterItem title="Creator Portal" href="https://www.tiktok.com/about?lang=en" />
        <FooterItem title="Community Guideline" href="https://www.tiktok.com/about?lang=en" />
      </div>
      <div className={cx('footer-container')}>
        <FooterItem title="©  2023 Tiktok" href="https://www.tiktok.com/about?lang=en" />
      </div>
    </div>
  );
}

export default Footer;
