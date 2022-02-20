import { VFC } from 'react';

import { Header } from 'components';
import { FirstBlock, About, Roadmap } from 'sections';

const Landing: VFC = () => {
  return (
    <>
      <Header />
      <main>
        <FirstBlock />
        <About />
        <Roadmap />
      </main>
    </>
  );
};

export default Landing;
