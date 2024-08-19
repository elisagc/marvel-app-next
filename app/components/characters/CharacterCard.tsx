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
    <Link href={`/characters/${character.id}`} passHref>
      <div key={character.id} className={classes["character-card"]}>
        <div className={classes["character-card-image-container"]}>
          <Image
            src={character.image}
            alt={character.name}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={classes["character-card-footer"]}>
          <span>{character.name}</span>
          <FavoriteButton id={character.id} />
        </div>
      </div>
    </Link>
  );
};
