"use client";

import { useAppSelector } from "@/store";
import { PokemonCard } from "./PokemonCard";
import { IoHeartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export const FavoritesPokemons = () => {
  const favoritePokemons = useAppSelector((state) => {
    if(!state.pokemons.favorites) return [];
    return Object.values(state.pokemons.favorites)
  }
    
  );
  const [pokemons, setPokemons] = useState(favoritePokemons)
  

  return (
    <div className="flex gap-10 justify-center flex-wrap">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : favoritePokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};


export const NoFavorites = () => {
  return (
    <div className="flex flex-col p-2 h-[50%] justify-center items-center">
      <IoHeartOutline size={100} className="text-red-600" />
      <h1 className="text-2xl font-bold">No favorites pokemons</h1>
    </div>
  );
};