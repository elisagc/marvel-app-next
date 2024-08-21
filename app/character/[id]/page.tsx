import { getCharacterDetail } from "@/api/characters/data";
import { getCharacterComics } from "@/api/comics/data";
import { CharacterDetailHeader } from "@/components";
import { ComicList } from "@/components/comic/ComicList";

import { Character } from "@/interfaces/Characters";
import { Comic } from "@/interfaces/Comics";

interface Props {
  params: {
    id: string;
  };
}

export default async function CharacterDetailPage({ params }: Props) {
  const characterComics: Comic[] = await getCharacterComics(params.id);
  const character: Character = await getCharacterDetail({ id: params.id });

  return (
    <>
      <CharacterDetailHeader character={character} />
      <ComicList comics={characterComics} />
    </>
  );
}
