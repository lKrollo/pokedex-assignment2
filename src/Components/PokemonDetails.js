import React from 'react';
import {formatStats} from "../utils/pokemonData";
import Datarow from "../Components/modal/DataRow"

function PokemonDetails({ pokemon, onClose }) {
    const stats = formatStats(pokemon.stats);

    return (
            <div className="modal">
                <div className="modal-content">
                    <span id="modal-name">{pokemon.name}</span>
                    <img src={pokemon.sprite} alt={pokemon.name} />
                    <span>Type: {pokemon.type}</span>
                    <span>Height: {pokemon.height} cm</span>
                    <span>Weight: {pokemon.weight} kg</span>
                    <>
                        <h4>Base Stats</h4>

                        <table>
                            <tbody>
                            {
                                stats.map(stat => {
                                    const { name, value, max } = stat;

                                    return <Datarow key = { name } catergory={ name } value={ value } max={ max } />
                                })
                            }
                            </tbody>
                        </table>
                    </>

                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        )
}

export default PokemonDetails;
