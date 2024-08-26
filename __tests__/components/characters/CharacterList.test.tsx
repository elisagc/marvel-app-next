import { mockCharacters } from "@/__mocks__/apiMocks";
import { MockFavoritesContext, mockFavoritesContextValue } from "@/__mocks__/contextMocks";
import { CharacterList } from "@/components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

jest.mock("@/app/api/characters/data.ts", () => ({
  getCharacters: jest.fn().mockResolvedValue({ characters: mockCharacters, total: mockCharacters.length }),
}));
describe("CharacterList", () => {
  it("should render CharacterCards", async () => {
    const CharacterListResolved = await CharacterList({ query: undefined });
    const { getByText } = render(
      <MockFavoritesContext.Provider value={mockFavoritesContextValue}>
        {CharacterListResolved}
      </MockFavoritesContext.Provider>
    );

    mockCharacters.forEach((character) => {
      expect(getByText(character.name)).toBeInTheDocument();
    });
  });
});
