import { FavoriteButton } from "@/components";
import { Character } from "@/interfaces/Characters";
import Image from "next/image";
import classes from "./CharacterDetailHeader.module.css";

interface CharacterDetailHeaderProps {
  character: Character;
}
export const CharacterDetailHeader = ({ character }: CharacterDetailHeaderProps) => {
  return (
    <div className={classes.container}>
      <Image src={character.image} alt={character.name} width={320} height={320} />

      <div className={classes["container-detail-data"]}>
        <div>
          <h1 className={classes.title}>{character.name}</h1>
          <FavoriteButton character={character} size="medium" />
        </div>

        <p className={classes.description}>{character.description}</p>
      </div>
    </div>
  );
};
