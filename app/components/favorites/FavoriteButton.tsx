"use client";
import { Character } from "@/interfaces/Characters";
import { FavoritesContext } from "@/store/favoritesContext";
import Image from "next/image";
import { useContext } from "react";
import classes from "./FavoriteButton.module.css";

interface FavoriteButtonProps {
  character: Character;
}

export const FavoriteButton = ({ character }: FavoriteButtonProps) => {
  const { id } = character;
  const { toggleFavorite, favorites } = useContext(FavoritesContext);

  const handleFavorite = (character: Character) => (event: React.MouseEvent) => {
    event.preventDefault();
    toggleFavorite(character);
  };

  const isFavorite = !!favorites[id];

  return (
    <button onClick={handleFavorite(character)} className={classes.button}>
      <Image src={isFavorite ? "/heart.svg" : "/heart-empty.svg"} alt="favorite" width={12} height={12} />
    </button>
  );
};
