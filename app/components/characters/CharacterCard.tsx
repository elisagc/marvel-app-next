import { FavoriteButton } from "@/components";
import { Character } from "@/interfaces/Characters";
import Image from "next/image";
import Link from "next/link";
import classes from "./CharacterCard.module.css";

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div key={character.id} className={classes["character-card"]}>
      <Link href={`/character/${character.id}`}>
        <div className={classes["character-card-image-container"]}>
          <Image
            src={character.image}
            alt={character.name}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className={classes["character-card-footer"]}>
        <span>{character.name}</span>
        <FavoriteButton character={character} />
      </div>
    </div>
  );
};
