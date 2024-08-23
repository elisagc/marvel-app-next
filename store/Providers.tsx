"use client";
import React, { useContext, useEffect } from "react";
import { FavoritesContext, FavoritesProvider } from "./favoritesContext";

interface ProvidersProps {
  children: React.ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <FavoritesProvider>
      <FavoritesInitializer>{children}</FavoritesInitializer>
    </FavoritesProvider>
  );
};

const FavoritesInitializer = ({ children }: ProvidersProps) => {
  const { setFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") ?? "{}");
    setFavorites(storedFavorites);
  }, [setFavorites]);

  return <>{children}</>;
};
