import * as React from 'react';
import type { AppProps } from 'next/app';
import NextHead from 'next/head';
import '../styles/globals.css';
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { ChakraProvider } from '@chakra-ui/react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { chain, createClient, WagmiConfig, configureChains } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  Chain,
} from '@rainbow-me/rainbowkit';

import { useIsMounted } from '../hooks';
import { ethers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";

// Get environment variables
// const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID as string;
// const infuraId = process.env.NEXT_PUBLIC_INFURA_ID as string;


function getLibrary(provider: any) {
  const gottenProvider = new ethers.providers.Web3Provider(provider, "any");
  return gottenProvider;
}

const { chains, provider } = configureChains(
  [chain.polygon], 
  [
    jsonRpcProvider({
      rpc: () => {
        return {
          http: 'https://rpc.ankr.com/polygon', 
        };
      },
    }),
    publicProvider(),
  ]
);

const desiredChainId = ChainId.Polygon;
const queryClient = new QueryClient();


const hardhatChain: Chain = {
  id: 31337,
  name: 'Hardhat',
  nativeCurrency: {
    decimals: 18,
    name: 'Hardhat',
    symbol: 'HARD',
  },
  network: 'hardhat',
  rpcUrls: {
    default: 'http://127.0.0.1:8545',
  },
  testnet: true,
};

// const { chains, provider } = configureChains(
//   [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, hardhatChain],
//   [alchemyProvider({ alchemyId }), publicProvider()]
// );

const { connectors } = getDefaultWallets({
  appName: 'create-web3',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const App = ({ Component, pageProps }: AppProps) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <WagmiConfig client={wagmiClient}>
      <ThirdwebProvider desiredChainId={desiredChainId}>
      {/* For React Query functionality */}
      <QueryClientProvider client={queryClient}>
      <RainbowKitProvider coolMode chains={chains}>
        <NextHead>
          <title>create-web3</title>
        </NextHead>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </RainbowKitProvider>
      </QueryClientProvider>
      </ThirdwebProvider>
    </WagmiConfig>
    </Web3ReactProvider>
  );
};

export default App;
