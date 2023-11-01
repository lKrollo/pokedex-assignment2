import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import { fetchPokemonList} from '../utils/pokemonData';
import { getPokemonType } from './TypeMapping';

function PokeDex() {
    const [pokemonList, setPokemonList] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 20;

    useEffect(() => {
        async function pokemonList() {
        const pokemon = await fetchPokemonList(page, itemsPerPage)
        setPokemonList(pokemon);
        }
        pokemonList();
    }, [page]);

    const handleNextPage = () => {
        setPage(page + 1);
    };
    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div>
            <div id="cardsContainer">
                {pokemonList.map((pokemon, index) => (
                    <div key={index} className={`PokemonCard ${getPokemonType(pokemon.type)}`}>
                        <span id="id">#{pokemon.id}</span>
                        <span id="name">{pokemon.name}</span>
                        <img src={pokemon.sprite} alt={pokemon.name} />
                        <span>{pokemon.type}</span>
                    </div>
                ))}
            </div>
            <Pagination
                page={page}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
            />
        </div>
    );
}

export default PokeDex;
