import { CharacterList, Search, SearchCounter } from "@/components";

import { getCharacters } from "@/api/characters/data";
import classes from "./page.module.css";

export default async function Home() {
  const { characters, total } = await getCharacters({ limit: 10, offset: 0 });

  return (
    <main className={classes["main-container"]}>
      <Search placeholder="Search a character..." />
      <SearchCounter results={total} />
      <CharacterList characters={characters} />
    </main>
  );
}
