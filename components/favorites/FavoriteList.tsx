"use client";

import { CharacterCard, SearchCounter } from "@/components";
import classes from "@/components/characters/CharacterList.module.css";
import { FavoritesContext } from "@/context/favoritesContext";
import { useContext } from "react";

export const FavoriteList = () => {
  const { favorites } = useContext(FavoritesContext);

  const characters = Object.values(favorites);

  return (
    <main className={classes["main-container"]}>
      <div>
        <SearchCounter results={characters.length} />
        <div className={classes["character-list"]}>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </main>
  );
};
