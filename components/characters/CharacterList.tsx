import { getCharacters } from "@/app/api/characters/data";
import { SearchCounter } from "@/components";
import { CharacterCard } from "./CharacterCard";
import classes from "./CharacterList.module.css";

interface CharacterListProps {
  query?: string;
}

export const CharacterList = async ({ query = undefined }: CharacterListProps) => {
  const { characters, total } = await getCharacters({
    limit: 50,
    offset: 0,
    search: query,
  });
  return (
    <div>
      <SearchCounter results={total} />
      <div className={classes["character-list"]}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};
