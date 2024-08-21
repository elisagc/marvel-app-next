"use client";

import { Character } from "@/interfaces/Characters";
import { FavoritesContext } from "@/store/favoritesContext";
import Image from "next/image";
import { useContext } from "react";
import classes from "./FavoriteButton.module.css";

interface FavoriteButtonProps {
  character: Character;
  size?: "small" | "medium";
}

export const FavoriteButton = ({ character, size = "small" }: FavoriteButtonProps) => {
  const { id } = character;
  const { toggleFavorite, favorites } = useContext(FavoritesContext);

  const handleFavorite = (character: Character) => (event: React.MouseEvent) => {
    event.preventDefault();
    toggleFavorite(character);
  };

  const isFavorite = !!favorites[id];

  const buttonSize = {
    small: 12,
    medium: 24,
  };

  return (
    <button onClick={handleFavorite(character)} className={classes.button}>
      <Image
        src={isFavorite ? "/heart.svg" : "/heart-empty.svg"}
        alt="favorite"
        width={buttonSize[size]}
        height={buttonSize[size]}
      />
    </button>
  );
};
