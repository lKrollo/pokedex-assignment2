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
                    name: removeHyphens(pokemonData.name),
                    sprite: pokemonData.sprites.front_default,
                    type: pokemonData.types[0].type.name,
                    height: pokemonData.height,
                    weight: pokemonData.weight,
                    stats: pokemonData.stats

                };
            })
        );
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

export function formatStats(stats) {
    const statsMaxValues = {
        hp: 714,
        attack: 714,
        defense: 614,
        "special-attack": 504,
        "special-defense": 614,
        speed: 504,
    }

    const statsObject = stats.map(({ stat, base_stat }) => {
        return {
            name: removeHyphens(stat.name),
            value: base_stat,
            max: statsMaxValues[stat.name]
        }
    });

    const total = stats.reduce((total, {base_stat}) => total + base_stat, 0);

    return [
        ...statsObject,
        { name: 'total', value: total }
    ];
}

const removeHyphens = (string) => {
    return string.replace(/-/g, ' ');
}