import { Comic } from "@/interfaces/Comics";
import Image from "next/image";
import classes from "./ComicCard.module.css";

export const ComicCard = (comic: Comic) => {
  return (
    <div key={comic.id} className={classes.card}>
      <Image src={comic.image} alt={comic.name} height={269} width={180} />
      <p className={classes["card-title"]}>{comic.name}</p>
      <p className={classes["card-subtitle"]}>{comic.year}</p>
    </div>
  );
};
