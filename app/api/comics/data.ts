import { Comic, ComicApiResponse } from "@/types/Comics";

export const getCharacterComics = async (id: string): Promise<Comic[]> => {
  const url = `https://gateway.marvel.com/v1/public/characters/${id}/comics?orderBy=issueNumber&`;

  const urlApiKeyParams = `ts=${process.env.NEXT_PUBLIC_TIME_STAMP}&apikey=${process.env.NEXT_PUBLIC_MARVEL_API_KEY}&hash=${process.env.NEXT_PUBLIC_HASH_MD5}`;

  const { data }: ComicApiResponse = await fetch(`${url}${urlApiKeyParams}`).then((res) => res.json());

  return data.results.map((comic) => ({
    id: comic.id,
    image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
    name: comic.title,
    year: comic.dates[0].date.split("-")[0],
  }));
};
