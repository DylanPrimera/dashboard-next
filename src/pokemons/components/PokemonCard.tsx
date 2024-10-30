import Image from "next/image";
import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeartOutline } from "react-icons/io5";
interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

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
              href={`/dashboard/pokemon/${id}`}
            >
              Pokemon Info
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/"
            className="px-4 py-2 hover:bg-gray-100 flex items-center"
          >
            <div className="text-red-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Favorite
              </p>
              <p className="text-xs text-gray-500">Set pokemon as favorite</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
