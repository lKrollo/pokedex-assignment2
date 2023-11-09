import React from 'react';
import PokeDex from './Components/Pokédex';
import logo from './img/logo.png';

export default function App() {
    return (
        <div className="page">
            <div className="centeredContainer">
                <img id="logo" src={logo} alt="logo"/>
            </div>
            <PokeDex />
        </div>
    );
}

