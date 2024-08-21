import { Character } from "@/interfaces/Characters";
import { createContext, ReactNode, useCallback, useContext, useEffect, useReducer } from "react";

type FavoritesMap = {
  [id: number]: Character;
};

enum FavoritesActionTypes {
  ADD_FAVORITE = "ADD_FAVORITE",
  REMOVE_FAVORITE = "REMOVE_FAVORITE",
  SET_FAVORITES = "SET_FAVORITES",
}

type FavoritesState = {
  favorites: FavoritesMap;
};

type FavoritesAction =
  | { type: FavoritesActionTypes.ADD_FAVORITE; payload: Character }
  | { type: FavoritesActionTypes.REMOVE_FAVORITE; payload: number }
  | { type: FavoritesActionTypes.SET_FAVORITES; payload: FavoritesMap };

const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case FavoritesActionTypes.ADD_FAVORITE:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [action.payload.id]: action.payload,
        },
      };
    case FavoritesActionTypes.REMOVE_FAVORITE:
      const newFavorites = { ...state.favorites };
      delete newFavorites[action.payload];
      return { ...state, favorites: newFavorites };

    case FavoritesActionTypes.SET_FAVORITES:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

interface FavoritesContextProps {
  favorites: FavoritesMap;
  toggleFavorite: (character: Character) => void;
  setFavorites: (favorites: FavoritesMap) => void;
}

export const FavoritesContext = createContext<FavoritesContextProps>({} as FavoritesContextProps);

export const useFavorites = (): FavoritesContextProps => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [state, dispatch] = useReducer(favoritesReducer, { favorites: {} });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  const toggleFavorite = (character: Character) => {
    const { id } = character;
    if (state.favorites[id]) {
      dispatch({ type: FavoritesActionTypes.REMOVE_FAVORITE, payload: id });
    } else {
      dispatch({ type: FavoritesActionTypes.ADD_FAVORITE, payload: character });
    }
  };

  const setFavorites = useCallback((favorites: FavoritesMap) => {
    dispatch({ type: FavoritesActionTypes.SET_FAVORITES, payload: favorites });
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorites: state.favorites, toggleFavorite, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
