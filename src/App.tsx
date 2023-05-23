import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {ethers} from "ethers";

function App() {
    const [walletAdress, setWalletAdress] = useState("");
    async function requestAccount(){
        console.log("first");
        if (window.ethereum){
            console.log('detected');
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAdress(accounts);
            } catch (error) {
                console.log('Error connecting...')
            }
        } else {
            alert('Meta Mask not detected');

        }
    }
    async function connectWallet() {
        if (typeof window.ethereum!== 'undefined'){
            await requestAccount();
            const provider = new ethers.BrowserProvider(window.ethereum)
        }
    }
        return (
        <div className="App">
            <header className="App-header">
                <button
                    onClick={requestAccount}
                > Connect Wallet
                </button>
                <h3>Wallet Address: {walletAdress}</h3>
            </header>
        </div>
    );
}

export default App;
