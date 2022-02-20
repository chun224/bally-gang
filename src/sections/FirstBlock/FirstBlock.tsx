import { VFC } from 'react';

import s from './FirstBlock.module.scss';

import { logo_title } from 'assets/img';

const FirstBlock: VFC = () => {
  return (
    <section className={s.block}>
      <img src={logo_title} alt="logo" />
    </section>
  );
};

export default FirstBlock;
