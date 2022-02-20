import { abi } from './nftAbi';

export const is_production = true;

export const polygonProvider = {
  network: {
    chainID: is_production ? 1 : 4,
    chainName: is_production ? 'Ethereum' : 'Rinkeby',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpc: is_production
      ? 'https://mainnet.infura.io/v3/e30174475e4b42bc9daab0cb45748b9c'
      : 'https://rinkeby.infura.io/v3/e30174475e4b42bc9daab0cb45748b9c',
    blockExplorerUrl: is_production ? 'https://etherscan.io/' : 'https://rinkeby.etherscan.io/',
  },
  provider: {
    MetaMask: { name: 'MetaMask' },
    WalletConnect: {
      name: 'WalletConnect',
      useProvider: 'rpc',
      provider: {
        rpc: {
          rpc: {
            [is_production ? 1 : 4]: is_production
              ? 'https://mainnet.infura.io/v3/e30174475e4b42bc9daab0cb45748b9c'
              : 'https://rinkeby.infura.io/v3/e30174475e4b42bc9daab0cb45748b9c',
          },
          chainId: is_production ? 1 : 4,
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
