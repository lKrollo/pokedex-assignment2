const typeMap = {
    grass: 'grass',
    fire: 'fire',
    water: 'water',
    bug: 'bug',
    poison: 'poison',
    electric: 'electric',
    normal: 'normal',
    dark: 'dark',
    dragon: 'dragon',
    fairy: 'fairy',
    fighting: 'fighting',
    flying: 'flying',
    ghost: 'ghost',
    ground: 'ground',
    ice: 'ice',
    psychic: 'psychic',
    rock: 'rock',
    steel: 'steel',
};

export function getPokemonType(type) {
    return typeMap[type] || 'other';
}
