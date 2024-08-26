import { getCharacterDetail } from "@/app/api/characters/data";
import { getCharacterComics } from "@/app/api/comics/data";
import { CharacterDetailHeader } from "@/components";
import { ComicList } from "@/components/comic/ComicList";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  try {
    const { name } = await getCharacterDetail({ id: params.id });
    return {
      title: `${name}`,
      description: `Character detail page for ${name}`,
    };
  } catch (error) {
    return {
      title: "Marvel Characters",
      description: "Marvel characters page",
    };
  }
};

export default async function CharacterDetailPage({ params }: Props) {
  const [characterComics, character] = await Promise.all([
    getCharacterComics(params.id),
    getCharacterDetail({ id: params.id }),
  ]);

  const hasComics = !!characterComics.length;
  const title = hasComics ? "Comics" : "No comics found";

  return (
    <>
      <CharacterDetailHeader character={character} />
      <ComicList comics={characterComics} title={title} />
    </>
  );
}
