import { VFC } from 'react';

import s from './index.module.scss';

import { inst } from 'assets';

const Footer: VFC = () => {
  return (
    <footer className={s.footer}>
      <a
        href="https://www.instagram.com/lawtattoos/"
        target="_blank"
        rel="noreferrer noopener"
        className={s.insta}
      >
        <img src={inst} alt="Artist instagram" />
      </a>
      <div className={s.text}>
        Jesus Christ Super Lars © {new Date().getFullYear()} <br /> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
