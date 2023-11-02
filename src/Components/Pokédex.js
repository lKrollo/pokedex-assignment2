import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import { fetchPokemonList} from '../utils/pokemonData';
import { getPokemonType } from './TypeMapping';
import PokemonDetails from "./PokemonDetails";

function PokeDex() {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [page, setPage] = useState(1);
    const itemsPerPage = 20;

    useEffect(() => {
        async function pokemonList() {
        const pokemon = await fetchPokemonList(page, itemsPerPage)
        setPokemonList(pokemon);
        }
        pokemonList();
    }, [page, itemsPerPage]);

    const handleNextPage = () => {
        setPage(page + 1);
    };
    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };
    const handlePokemonCardClick = (pokemon) => {
        setSelectedPokemon(pokemon);
        setModalOpen(true); // Open the modal when a Pokémon is clicked
    };
    const closeModal = () => {
        setSelectedPokemon(null);
        setModalOpen(false); // Close the modal
    };

    return (
        <div>
            <div id="cardsContainer"> {pokemonList.map((pokemon, index) => (
                    <div id={getPokemonType(pokemon.type)}
                         key={index}
                         className={`PokemonCard`}
                         onClick={() => handlePokemonCardClick(pokemon)}
                    >
                        <span id="id">#{pokemon.id}</span>
                        <span id="name" >{pokemon.name}</span>
                        <img src={pokemon.sprite} alt={pokemon.name} />
                    </div>
                ))}
            </div>
            <Pagination
                page={page}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
            />
            {isModalOpen && (
                <PokemonDetails
                    pokemon={selectedPokemon}
                    onClose={closeModal} />
                    )}
        </div>
    );
}

export default PokeDex;
