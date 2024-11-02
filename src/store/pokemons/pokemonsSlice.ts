import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

interface PokemonsFavoriteState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsFavoriteState = {
  // "1": { id: "1", name: "bulbasaur" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      if (!!state[action.payload.id]) {
        delete state[action.payload.id];
        return;
      }
      state[action.payload.id] = action.payload;
    },
    
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
