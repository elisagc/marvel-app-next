import React from "react";

const mockToggleFavorite = jest.fn();
const mockSetFavorites = jest.fn();
const mockFavorites = {};

export const mockFavoritesContextValue = {
  toggleFavorite: mockToggleFavorite,
  favorites: mockFavorites,
  setFavorites: mockSetFavorites,
};

export const MockFavoritesContext = React.createContext({
  toggleFavorite: mockToggleFavorite,
  favorites: mockFavorites,
  setFavorites: mockSetFavorites,
});
