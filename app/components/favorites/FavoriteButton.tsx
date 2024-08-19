"use client";
import Image from "next/image";
import classes from "./FavoriteButton.module.css";

interface FavoriteButtonProps {
  id: number;
}

export const FavoriteButton = ({ id }: FavoriteButtonProps) => {
  const handleFavorite = (id: number) => (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(id);
  };

  return (
    <button onClick={handleFavorite(id)} className={classes.button}>
      <Image src="/heart.svg" alt="favorite" width={12} height={12} />
    </button>
  );
};
