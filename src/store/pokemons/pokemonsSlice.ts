import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

interface PokemonsFavoriteState {
  favorites: {[key: string]: SimplePokemon};
  
}

const getInitialState = (): PokemonsFavoriteState => {
  return JSON.parse(localStorage?.getItem("favorites-pokemons") || "{}");
};

const initialState: PokemonsFavoriteState = {
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setLocalFavorites(state, action: PayloadAction<PokemonsFavoriteState>) {
      state.favorites = action.payload.favorites;
    },  
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      console.log(action.payload.id)
      if (!!state.favorites[action.payload.id]) {
        delete state.favorites[action.payload.id];
        return;
      }
      state.favorites[action.payload.id] = action.payload;
    },
  },
});

export const { toggleFavorite, setLocalFavorites } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
