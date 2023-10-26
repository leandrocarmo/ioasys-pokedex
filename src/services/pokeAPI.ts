import axios from 'axios';
import { Pokemon } from './types';

const BASE_URL = 'https://pokeapi.co/api/v2';

// Função para fazer chamadas à API.
export const apiCall = async (endpoint: string) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao fazer chamada para: ${endpoint}`, error);
    return null;
  }
};

// Busca detalhes dos Pokémons.
export const fetchPokemons = async (): Promise<Pokemon[]> => {
  const pokemons = [];
  for (let i = 1; i < 50; i++) {
    const pokemon = await apiCall(`/pokemon/${i}/`);
    if (pokemon) pokemons.push(pokemon);
  }
  return pokemons;
};

// Busca detalhes de um Pokémon pelo ID.
export const fetchPokemonById = async (id: number): Promise<Pokemon | null> => {
  return await apiCall(`/pokemon/${id}/`);
};

// Busca a descrição de um Pokémon.
export const fetchPokemonDescription = async (id: number, versionName: string = 'version-x'): Promise<string | undefined> => {
  const data = await apiCall(`/pokemon-species/${id}/`);
  if (data) {
    const flavorTextEntry = data.flavor_text_entries.find(
      (entry: any) => entry.version.name === versionName && entry.language.name === 'en'
    );
    return flavorTextEntry ? flavorTextEntry.flavor_text : undefined;
  }
  return undefined;
};
