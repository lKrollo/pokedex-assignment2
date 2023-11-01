export async function fetchPokemons(offset, limit) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    if (response.ok) {
        const data = await response.json();
        return data.results;
    } else {
        throw new Error('Failed to fetch Pokémon list');
    }
}
