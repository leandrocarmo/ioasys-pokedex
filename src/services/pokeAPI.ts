import axios from 'axios';
import { Pokemon } from './types';

export const fetchPokemons = async (): Promise<Pokemon[]> => {
    const endpoints = [];
    for (let i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    try {
      const responses = await axios.all(endpoints.map(endpoint => axios.get(endpoint)));
      return responses.map(response => response.data);
    } catch (error) {
      console.error("Error fetching Pokemons:", error);
      return [];
    }
};

export const filterPokemonsByName = (pokemons: Pokemon[], name: string): Pokemon[] => {
    return pokemons.filter(pokemon => pokemon.name.includes(name));
};
