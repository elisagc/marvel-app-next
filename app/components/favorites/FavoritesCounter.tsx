import Image from "next/image";
import Link from "next/link";
import classes from "./FavoritesCounter.module.css";

export const FavoritesCounter = () => {
  return (
    <div className={classes["favorites-container"]}>
      <Link href={"/favorites"}>
        <Image src="/heart.svg" alt="favorite" width={24} height={24} />
      </Link>
      <span>3</span>
    </div>
  );
};
