import { Character } from "@/types/Characters";

export const mockCharacters: Character[] = [
  {
    id: 1,
    name: "Character 1",
    description: "Description 1",
    image: "http://i.annihil.us/u/prod/marvel/i/mg/7/00/545a82f59dd73.jpg",
  },
  {
    id: 2,
    name: "Character 2",
    description: "Description 2",
    image: "http://i.annihil.us/u/prod/marvel/i/mg/7/00/545a82f59dd73.jpg",
  },
];

export function mockGetCharacters() {
  return jest.fn().mockResolvedValue({ characters: mockCharacters, total: mockCharacters.length });
}
