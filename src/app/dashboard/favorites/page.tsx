import { FavoritesPokemons } from "@/pokemons";
import { IoHeartOutline } from "react-icons/io5";


export const metadata = {
  title: "Favorite Pokemons",
  description: "Pokemons",
};

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col p-2">
      <h1 className="text-2xl font-bold">Favorite Pokemons</h1>
      <FavoritesPokemons/>
    </div>
  );
}


