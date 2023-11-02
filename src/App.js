import React, {useState} from 'react';
import PokeDex from './Components/Pokédex';
import logo from './img/pokedexLogo.svg'

function App() {
    const [page, setPage] = useState(1)

    const handleLogoClick = () => {
        // Set the page to 1 when the logo is clicked
        setPage(1);
    };

    return (
        <div>
            <img id="logo" src={logo} alt="Logo" onClick={handleLogoClick} />
            <PokeDex />
        </div>
    );
}

export default App;
