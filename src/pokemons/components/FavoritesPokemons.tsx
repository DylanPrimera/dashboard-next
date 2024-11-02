"use client";

import { useAppSelector } from "@/store";
import { PokemonCard } from "./PokemonCard";
import { IoHeartOutline } from "react-icons/io5";
import { useState } from "react";

export const FavoritesPokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );
  const [pokemons, setPokemons] = useState(favoritePokemons)

  return (
    <div className="flex gap-10 justify-center flex-wrap">
      {pokemons.length === 0 ? (
        <NoFavorites />
      ) : pokemons.map((pokemon) => (
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