import { Character, CharacterResponse, CharactersApiResponse } from "@/types/Characters";
import { PokemonsReponse } from "@/types/Pokemon";
import { notFound } from "next/navigation";

export const getCharacters = async ({
  limit = 0,
  offset = 0,
  search = undefined,
}: {
  limit?: number;
  offset?: number;
  search?: string;
}): Promise<CharacterResponse> => {
  try {
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
  } catch (error) {
    throw error;
  }
};

export const getCharacterDetail = async ({ id }: { id: string }): Promise<Character> => {
  try {
    const url = `https://gateway.marvel.com/v1/public/characters/${id}`;
    const urlApiKeyParams = `?ts=${process.env.TIME_STAMP}&apikey=${process.env.MARVEL_API_KEY}&hash=${process.env.HASH_MD5}`;
    const { data }: CharactersApiResponse = await fetch(`${url}${urlApiKeyParams}`).then((res) => res.json());
    if (data && data.results) {
      const character: Character = {
        id: data.results[0].id,
        name: data.results[0].name,
        image: `${data.results[0].thumbnail.path}.${data.results[0].thumbnail.extension}`,
        description: data.results[0].description,
      };

      return character;
    }

    return notFound();
  } catch (error) {
    throw error;
  }
};

// Create to test in vercel with pokemon api (marvel api too slow and break in vercel)
export const getPokemons = async ({
  limit = 0,
  offset = 0,
  search = undefined,
}: {
  limit?: number;
  offset?: number;
  search?: string;
}): Promise<CharacterResponse> => {
  const data: PokemonsReponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}}`).then(
    (res) => res.json()
  );

  const pokemons = data.results.map((pokemon) => ({
    id: Number(pokemon.url.split("/").at(-2)!),
    name: pokemon.name,
    description: "",
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Number(
      pokemon.url.split("/").at(-2)!
    )}.svg`,
  }));

  return {
    characters: pokemons,
    total: pokemons.length,
  };
};
