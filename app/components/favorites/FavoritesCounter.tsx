"use client";
import { FavoritesContext } from "@/store/favoritesContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import classes from "./FavoritesCounter.module.css";

export const FavoritesCounter = () => {
  const { favorites } = useContext(FavoritesContext);

  const favoritesCounter = Object.keys(favorites).length;

  return (
    <div className={classes["favorites-container"]}>
      <Link href={"/favorites"}>
        <Image src="/heart.svg" alt="favorite" width={24} height={24} />
      </Link>
      <span>{favoritesCounter}</span>
    </div>
  );
};
