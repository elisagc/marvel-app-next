import { getCharacterDetail } from "@/api/characters/data";
import { getCharacterComics } from "@/api/comics/data";
import { CharacterDetailHeader } from "@/components";
import { ComicList } from "@/components/comic/ComicList";

interface Props {
  params: {
    id: string;
  };
}

export default async function CharacterDetailPage({ params }: Props) {
  const [characterComics, character] = await Promise.all([
    getCharacterComics(params.id),
    getCharacterDetail({ id: params.id }),
  ]);

  const hasComics = !!characterComics.length;
  const title = hasComics ? "Comics" : "No comics found";

  console.log(characterComics, !!characterComics, !!characterComics.length);
  return (
    <>
      <CharacterDetailHeader character={character} />
      <ComicList comics={characterComics} title={title} />
    </>
  );
}
