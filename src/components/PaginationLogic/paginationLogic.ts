import { useState, useEffect } from 'react';
import { fetchPokemons } from '@/services/pokeAPI';
import { usePokemons } from '@/context/pokemonContext';

// Paginação para carregar Pokémon com infinite scroll.
export function usePaginationLogic(initialLoadLimit: number, loadMoreLimit: number) {
  const { pokemons, setPokemons } = usePokemons();
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Carrega inicialmente uma lista de Pokémon.
  const loadInitialPokemons = async () => {
    setLoading(true);

    // Implementação de carregamento inicial.
    try {
      const fetchedPokemons = await fetchPokemons(1, initialLoadLimit);

      if (fetchedPokemons.length > 0) {
        setPokemons(fetchedPokemons);
      }
    } catch (error) {
      console.error('Erro ao carregar Pokémon inicial:', error);
    }
    setLoading(false);
  };

  // Carrega mais Pokémon quando a rolagem atinge o final.
  const loadMorePokemons = async () => {

    // Implementação de carregamento adicional.
    if (!loading) {
      setLoading(true);

      const newOffset = pokemons.length + 1;
      const fetchedPokemons = await fetchPokemons(newOffset, loadMoreLimit);

      if (fetchedPokemons.length > 0) {
        setPokemons([...pokemons, ...fetchedPokemons]);
      } else {
        setHasMore(false);
      }

      setLoading(false);
    }
  };

  // Efeito para carregar Pokémon inicialmente.
  useEffect(() => {
    // Implementação do efeito de carregamento inicial.
    if (pokemons.length === 0) {
      loadInitialPokemons();
    }
  }, []);

  return {
    pokemons,
    hasMore,
    loadMorePokemons,
  };
}
