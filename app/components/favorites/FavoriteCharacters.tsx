"use client";

import { CharacterList, Search, SearchCounter, Title } from "@/components";
import { FavoritesContext } from "@/store/favoritesContext";
import { useContext } from "react";
import classes from "../../page.module.css";

export const FavoriteCharacters = () => {
  const { favorites } = useContext(FavoritesContext);

  const characters = Object.values(favorites);

  return (
    <main className={classes["main-container"]}>
      <div className={classes["main-search-container"]}>
        <Title title="Favorites" />
        <Search placeholder="Search a character..." />
        <SearchCounter results={characters.length} />
      </div>
      <div className={classes["main-content-container"]}>
        <CharacterList characters={characters} />
      </div>
    </main>
  );
};
