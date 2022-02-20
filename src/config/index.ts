import { abi } from './nftAbi';

export const is_production = true;

export const polygonProvider = {
  network: {
    chainID: is_production ? 137 : 80001,
    chainName: is_production ? 'Polygon' : 'Polygon testnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpc: is_production
      ? 'https://rpc-mainnet.maticvigil.com/'
      : 'https://matic-mumbai.chainstacklabs.com',
    blockExplorerUrl: is_production
      ? 'https://explorer.matic.network/'
      : 'https://mumbai.polygonscan.com/',
  },
  provider: {
    MetaMask: { name: 'MetaMask' },
    WalletConnect: {
      name: 'WalletConnect',
      useProvider: 'rpc',
      provider: {
        rpc: {
          rpc: {
            [is_production ? 137 : 80001]: is_production
              ? 'https://rpc-mainnet.maticvigil.com/'
              : 'https://matic-mumbai.chainstacklabs.com',
          },
          chainId: is_production ? 137 : 80001,
        },
      },
    },
  },
};

export const contractConfig = {
  abi,
  address: is_production
    ? '0xe3F05997f43f10D60e7bA855BF9Ce44bC1aCAe26'
    : '0x9283C02820C48BCC346fa5943990B3E51997625c',
};
