import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import { Landing } from 'pages';
import { WalletConnectContext } from 'context';

export const App: FC = () => {
  return (
    <WalletConnectContext>
      <ToastContainer />
      <Landing />
    </WalletConnectContext>
  );
};
