import React from 'react';

function PokemonDetails({ pokemon, onClose }) {
    return (
            <div className="modal">
                <div className="modal-content">
                    <span>{pokemon.name}</span>
                    <img src={pokemon.sprite} alt={pokemon.name} />
                    <span>Type: {pokemon.type}</span>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        )
}

export default PokemonDetails;
