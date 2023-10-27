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

// Carrega informações dos Pokémons e junta com as descrições.
export const fetchPokemons = async (): Promise<Pokemon[]> => {
  const pokemons = [];

  for (let i = 1; i <= 150; i++) {
    const pokemon = await apiCall(`/pokemon/${i}/`);

    if (pokemon) {
      const description = await fetchPokemonDescription(i);
      pokemon.description = description;
      pokemons.push(pokemon);
    }
  }

  return pokemons;
};

// Carrega a descrição e os detalhes dos pokemons pelo ID.
// Caso não exista realiza a requisição para API.
export const fetchPokemonById = async (id: number): Promise<Pokemon | null> => {
  const pokemon = await apiCall(`/pokemon/${id}/`);

  if (pokemon) {
    const description = await fetchPokemonDescription(id);
    pokemon.description = description;
  }

  return pokemon;
};

// Busca a descrição de um Pokémon pelo ID e a versão.
export const fetchPokemonDescription = async (id: number, versionName: string = 'version-x'): Promise<string | undefined> => {
  const data = await apiCall(`/pokemon-species/${id}/`);

  if (data && data.flavor_text_entries) {
    const flavorTextAtPosition = data.flavor_text_entries[91]?.flavor_text;

    const flavorTextEntry = flavorTextAtPosition || data.flavor_text_entries.find(
      (entry: any) => entry.version.name === versionName && entry.language.name === 'en'
    )?.flavor_text || data.flavor_text_entries.find(
      (entry: any) => entry.language.name === 'en'
    )?.flavor_text;

    return flavorTextEntry;
  }

  return undefined;
};
