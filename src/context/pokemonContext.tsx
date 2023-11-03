import React, { createContext, useContext, useState } from 'react';
import { Pokemon } from '../services/types';

// Define os tipos para o contexto de Pokémons.
interface PokemonContextType {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

// Define os tipos para as props do componente provider de Pokémons.
interface PokemonProviderProps {
  children: React.ReactNode;
}

// Cria um contexto para Pokémons.
const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

// Componente provider que mantém o estado dos Pokémons e disponibiliza para os componentes filhos.
export const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

// Hook personalizado para acessar o contexto dos Pokémons.
// Lança um erro se não for usado dentro de um PokemonProvider.
export const usePokemons = () => {
  const context = useContext(PokemonContext);

  if (context === undefined) {
    throw new Error('usePokemons deve ser usado com PokemonProvider');
  }

  return context;
};
