import { FavoriteButton } from "@/components";
import { Character } from "@/types/Characters";
import Image from "next/image";
import classes from "./CharacterDetailHeader.module.css";
interface CharacterDetailHeaderProps {
  character: Character;
}
export const CharacterDetailHeader = ({ character }: CharacterDetailHeaderProps) => {
  return (
    <div className={`${classes["wrapper-container"]} ${classes["corner-cut"]}`}>
      <div className={classes["main-container"]}>
        <div className={classes["character-image-wrapper"]}>
          <Image
            src={character.image}
            alt={character.name}
            fill={true}
            className={classes["character-image"]}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className={classes["character-info-container"]}>
          <div className={classes["character-title-favorite"]}>
            <h1 className={classes["character-title"]}>{character.name}</h1>
            <FavoriteButton character={character} size="medium" />
          </div>
          <p>{character.description}</p>
        </div>
      </div>
    </div>
  );
};
