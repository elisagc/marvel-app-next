import { FavoriteCharacters } from "@/components";

export const metadata = {
  title: "Favorites",
  description: "Favorites page",
};

export default async function Home() {
  return <FavoriteCharacters />;
}
