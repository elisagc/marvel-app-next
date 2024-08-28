import { Comic, ComicApiResponse } from "@/types/Comics";

export const getCharacterComics = async (id: string): Promise<Comic[]> => {
  const url = `https://gateway.marvel.com/v1/public/characters/${id}/comics?orderBy=onsaleDate&limit=20&offset=0`;

  const urlApiKeyParams = `&ts=${process.env.TIME_STAMP}&apikey=${process.env.MARVEL_API_KEY}&hash=${process.env.HASH_MD5}`;
  const { data }: ComicApiResponse = await fetch(`${url}${urlApiKeyParams}`).then((res) => res.json());

  if (!data?.results) return [];
  return data?.results?.map((comic) => ({
    id: comic.id,
    image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
    name: comic.title,
    year: comic.dates[0].date.split("-")[0],
  }));
};
