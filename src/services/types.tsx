import { Dispatch, SetStateAction } from 'react';

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  sprites: Sprites;
  species: NamedAPIResource;
  stats: Stat[];
  types: Type[];
};

export type Ability = {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
};

export type NamedAPIResource = {
  name: string;
  url: string;
};

export type VersionGameIndex = {
  game_index: number;
  version: NamedAPIResource;
};

export type HeldItem = {
  item: NamedAPIResource;
  version_details: VersionDetail[];
};

export type VersionDetail = {
  rarity: number;
  version: NamedAPIResource;
};

export type Move = {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
};

export type VersionGroupDetail = {
  level_learned_at: number;
  version_group: NamedAPIResource;
  move_learn_method: NamedAPIResource;
};

export type Sprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: {
      front_default: string;
    };
    'official-artwork': {
      front_default: string;
    };
  };
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
};

export type Type = {
  slot: number;
  type: NamedAPIResource;
};

export type SetPokemonData = Dispatch<SetStateAction<Pokemon[]>>;
