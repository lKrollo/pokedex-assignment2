import React from 'react';
import {formatStats} from "../utils/pokemonData";
import Datarow from "../Components/modal/DataRow"
import {getPokemonType} from "./TypeMapping";

function PokemonDetails({ pokemon, onClose }) {
    const stats = formatStats(pokemon.stats);

    return (
            <div className="modal">
                <div id={getPokemonType(pokemon.type)}
                     className="modal-content">
                    <span id="modal-name">{pokemon.name}</span>
                    <img src={pokemon.sprite} alt={pokemon.name} />
                    <span className="attribute">Type: {pokemon.type}</span>
                    <span className="attribute">Height: {pokemon.height} cm</span>
                    <span className="attribute">Weight: {pokemon.weight} kg</span>
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
