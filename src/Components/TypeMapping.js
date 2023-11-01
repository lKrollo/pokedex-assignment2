const typeMap = {
    grass: 'grass-type',
    fire: 'fire-type',
    water: 'water-type',
    bug: 'bug-type',
    poison: 'poison-type',
    electric: 'electric-type',
    normal: 'normal-type',
    dark: 'dark-type',
    dragon: 'dragon-type',
    fairy: 'fairy-type',
    fighting: 'fighting-type',
    flying: 'flying-type',
    ghost: 'ghost-type',
    ground: 'ground-type',
    ice: 'ice-type',
    psychic: 'psychic-type',
    rock: 'rock-type',
    steel: 'steel-type',
};

export function getPokemonType(type) {
    return typeMap[type] || 'other-type';
}
