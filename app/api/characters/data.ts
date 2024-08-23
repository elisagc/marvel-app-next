import { Character, CharacterResponse, CharactersApiResponse } from "@/types/Characters";

export const getCharacters = async ({
  limit = 0,
  offset = 0,
  search = undefined,
}: {
  limit?: number;
  offset?: number;
  search?: string;
}): Promise<CharacterResponse> => {
  const url = `https://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}`;
  const searchQuery = search ? `&nameStartsWith=${search}` : "";
  const urlApiKeyParams = `&ts=${process.env.TIME_STAMP}&apikey=${process.env.MARVEL_API_KEY}&hash=${process.env.HASH_MD5}`;
  const { data }: CharactersApiResponse = await fetch(`${url}${urlApiKeyParams}${searchQuery}`).then((res) =>
    res.json()
  );

  if (data?.results) {
    const characters: Character[] = data.results?.map((character) => ({
      id: character.id,
      name: character.name,
      image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      description: character.description,
    }));

    return {
      characters,
      total: data.results?.length,
    };
  }

  return { characters: [], total: 0 };
};

export const getCharacterDetail = async ({ id }: { id: string }): Promise<Character> => {
  const url = `https://gateway.marvel.com/v1/public/characters/${id}`;
  const urlApiKeyParams = `?ts=${process.env.TIME_STAMP}&apikey=${process.env.MARVEL_API_KEY}&hash=${process.env.HASH_MD5}`;

  const { data }: CharactersApiResponse = await fetch(`${url}${urlApiKeyParams}`).then((res) => res.json());
  if (data?.results) {
    const character: Character = {
      id: data.results[0].id,
      name: data.results[0].name,
      image: `${data.results[0].thumbnail.path}.${data.results[0].thumbnail.extension}`,
      description: data.results[0].description,
    };

    return character;
  }

  return {} as Character;
};
