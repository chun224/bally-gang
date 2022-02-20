import { VFC } from 'react';

import s from './index.module.scss';

import { inst, ds, twitter } from 'assets/img';

const Header: VFC = () => {
  return (
    <header className={s.header}>
      <div className={s.inner}>
        <div className={s.links_inner}>
          <a href="/" className={s.link}>
            <img src={inst} alt="instagram link" />
          </a>
          <a href="/" className={s.link}>
            <img src={ds} alt="discord link" />
          </a>
          <a href="/" className={s.link}>
            <img src={twitter} alt="twitter link" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
