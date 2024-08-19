import { Character, CharacterResponse, CharactersApiResponse } from "@/interfaces/Characters";
import { CharacterList, Search, SearchCounter } from "./components";

import classes from "./page.module.css";

const getCharacter = async ({ limit = 0, offset = 0 }): Promise<CharacterResponse> => {
  const url = `https://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}`;
  const urlApiKeyParams = `&ts=${process.env.NEXT_PUBLIC_TIME_STAMP}&apikey=${process.env.NEXT_PUBLIC_MARVEL_API_KEY}&hash=${process.env.NEXT_PUBLIC_HASH_MD5}`;

  const { data }: CharactersApiResponse = await fetch(`${url}${urlApiKeyParams}`).then((res) => res.json());

  if (data?.results) {
    const characters: Character[] = data.results?.map((character) => ({
      id: character.id,
      name: character.name,
      image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    }));

    return {
      characters,
      total: data.results?.length,
    };
  }

  return { characters: [], total: 0 };
};

export default async function Home() {
  const { characters, total } = await getCharacter({ limit: 50, offset: 0 });
  console.log(total);

  return (
    <main className={classes["main-container"]}>
      <div className={classes["main-search-container"]}>
        <Search placeholder="Search a character..." />
        <SearchCounter results={2} />
      </div>
      <div className={classes["main-content-container"]}>
        <CharacterList characters={characters} />
      </div>
    </main>
  );
}
