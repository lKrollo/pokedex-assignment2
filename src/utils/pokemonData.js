import {fetchPokemons} from "./api-fetch";

export async function fetchPokemonData(url) {
    const response = await fetch(url);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Failed to fetch Pokémon data');
    }
}

export async function fetchPokemonList(page, itemsPerPage) {
    try {
        const offset = (page - 1) * itemsPerPage;
        const results = await fetchPokemons(offset, itemsPerPage);

        return await Promise.all(
            results.map(async (pokemon, index) => {
                const pokemonData = await fetchPokemonData(pokemon.url);
                return {
                    id: (page - 1) * itemsPerPage + index + 1,
                    name: pokemon.name,
                    sprite: pokemonData.sprites.front_default,
                    type: pokemonData.types[0].type.name,
                };
            })
        );
    } catch (error) {
        console.error('An error occurred:', error);
    }
}