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
                    <div className="Header">
                    <span id="modal-name">{pokemon.name}</span>
                    </div>
                    <div className="content">
                    <span className="attribute"><p>Type: {pokemon.type}</p></span>
                    <span className="attribute"><p>Height: {pokemon.height} cm</p></span>
                    <span className="attribute"><p>Weight: {pokemon.weight} kg</p></span>
                    </div>
                    <img src={pokemon.sprite} alt={pokemon.name} />
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
