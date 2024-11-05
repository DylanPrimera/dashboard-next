"use client";
import Image from "next/image";
import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemonsSlice";
interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state) => {
    if(!state.pokemons.favorites) return false;
    return !!state.pokemons.favorites[pokemon.id];
  });

  const handleToggle = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className="mx-auto right-0 mt-2 w-60 ">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg h-90">
        <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
          <div className="w-[150px] h-[150px] flex flex-col items-center justify-center">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              width={20}
              height={20}
              alt={name}
              priority={false}
              className="w-full h-full object-contain"
            />
          </div>

          <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
          <div className="mt-5">
            <Link
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 hover:bg-white/5"
              href={`/dashboard/pokemons/${name}`}
            >
              Pokemon Info
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div className="px-4 py-2 hover:bg-gray-100 flex items-center">
            <button
              className="text-red-600"
              type="button"
              onClick={handleToggle}
            >
              <em>
                {isFavorite ? (
                  <IoHeart className="text-red-600" />
                ) : (
                  <IoHeartOutline className="text-red-600" />
                )}
              </em>
            </button>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Unfavorite" : "Favorite"}
              </p>
              <p className="text-xs text-gray-500">Set pokemon as favorite</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
