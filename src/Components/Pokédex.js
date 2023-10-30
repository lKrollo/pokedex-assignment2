import React, { useState, useEffect } from 'react';

function PokDex() {
    const [pokemonList, setPokemonList] = useState([]);
    const [page, setPage] = useState(1); // Current page number
    const itemsPerPage = 20;

    useEffect(() => {
        async function fetchPokemonList() {
            try {
                const offset = (page - 1) * itemsPerPage;
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`);

                if (response.ok) {
                    const data = await response.json();
                    const results = data.results;

                    const pokemonWithTypes = await Promise.all(
                        results.map(async (pokemon) => {
                            const pokemonData = await fetchPokemonData(pokemon.url);
                            return {
                                name: pokemon.name,
                                sprite: pokemonData.sprites.front_default,
                                type: pokemonData.types[0].type.name, // Assuming the first type for simplicity
                            };
                        })
                    );

                    setPokemonList(pokemonWithTypes);
                } else {
                    console.error('Failed to fetch Pokémon list');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        }

        fetchPokemonList();
    }, [page]);

    function fetchPokemonData(url) {
        return fetch(url).then((response) => response.json());
    }
    function getPokemonTypeClass(type) {
        switch (type) {
            case 'grass':
                return 'grass-type';
            case 'fire':
                return 'fire-type';
            case 'water':
                return 'water-type';
            case 'bug':
                return 'bug-type';
            case 'electric':
                return 'electric-type';
            case 'normal':
                return 'normal-type';
            case 'poison':
                return 'poison-type';
            default:
                return 'other-type';
        }
    }
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
            <h1>List of Pokémon</h1>
            <div id="cardsContainer">
                {pokemonList.map((pokemon, index) => (
                    <div key={index} className={`PokemonCard ${getPokemonTypeClass(pokemon.type)}`}>
                        <span>#{(page - 1) * itemsPerPage + index + 1}</span>
                        <span id="name">{pokemon.name}</span>
                        <img src={pokemon.sprite} alt={pokemon.name} />
                        <span>Type: {pokemon.type}</span>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
                <button onClick={handleNextPage}>Next</button>
            </div>
        </div>
    );
}

export default PokDex;
