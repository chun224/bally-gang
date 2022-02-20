import { VFC } from 'react';

import { About, FirstBlock, Roadmap, Team } from 'sections';

import { Header } from 'components';

const Landing: VFC = () => {
  return (
    <>
      <Header />
      <main>
        <FirstBlock />
        <About />
        <Roadmap />
        <Team />
      </main>
    </>
  );
};

export default Landing;
