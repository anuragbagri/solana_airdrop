import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import AirDrop from './AirDrop';


import '@solana/wallet-adapter-react-ui/styles.css';
// airdrop component 


function App() {
 
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/L2WQTcjS6zJZkKWzL2eneaAuJ1-OrYbs"}>   
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <WalletMultiButton></WalletMultiButton>
                  <WalletDisconnectButton></WalletDisconnectButton>
                  <div>
                    hello there
                  </div>
                  <AirDrop/>
                </WalletModalProvider>
                </WalletProvider>
        </ConnectionProvider>
  )          
}

export default App
