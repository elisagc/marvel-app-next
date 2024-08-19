import { Character } from "@/interfaces/Characters";
import { CharacterCard } from "./CharacterCard";
import classes from "./CharacterList.module.css";

interface CharacterListProps {
  characters: Character[];
}

export const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <div className={classes["character-list"]}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
