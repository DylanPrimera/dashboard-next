import {
  Action,
  Dispatch,
  Middleware,
  MiddlewareAPI,
  Store,
} from "@reduxjs/toolkit";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);
    if (action.type === "pokemons/toggleFavorite") {
      localStorage.setItem(
        "favorites-pokemons",
        JSON.stringify(state.getState().pokemons.favorites)
      );
      return;
    }
  };
};
