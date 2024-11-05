"use client";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { setLocalFavorites } from "./pokemons/pokemonsSlice";
import store from ".";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage?.getItem("favorites-pokemons") || "{}"
    );
    store.dispatch(setLocalFavorites(favorites));
  }, []);
  return <Provider store={store}>{children}</Provider>;
};
