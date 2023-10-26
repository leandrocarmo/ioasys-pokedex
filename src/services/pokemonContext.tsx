import React, { createContext, useContext, useState } from 'react';
import { Pokemon } from './types';

// Tipos do contexto dos Pokémons
interface PokemonContextType {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

// Tipos das props do PokemonProvider
interface PokemonProviderProps {
  children: React.ReactNode;
}

// Contexto dos Pokémons
const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

// Provider dos Pokémons
export const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

// Hook para usar o contexto dos Pokémons
export const usePokemons = () => {
  const context = useContext(PokemonContext);

  if (context === undefined) {
    throw new Error('usePokemons deve ser usado com PokemonProvider');
  }

  return context;
};
