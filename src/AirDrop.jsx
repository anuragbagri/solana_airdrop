import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

const AirDrop = () => {
    const wallet = useWallet();
    const { connection} = useConnection();

    async function sendairdroptouser(){
        const amount = document.getElementById("publickey").value
       await  connection.requestAirdrop(wallet.publicKey, amount*1000000000);
       alert("airdropped");
    }
    

   
  return (
    <div>
        <input id='publickey' type='text' placeholder='amount'></input>
        <button onClick={sendairdroptouser}>send airdrop</button>
    </div>
  )
}

export default AirDrop