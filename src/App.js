import React from 'react';
import PokeDex from './Components/Pokédex';
import logo from './img/pokedexLogo.svg'

function App() {
    return (
        <div>
            <img id="logo" src={logo} alt="Logo" />
            <PokeDex />
        </div>
    );
}

export default App;
