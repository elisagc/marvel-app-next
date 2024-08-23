import { FavoriteList, Search, Title } from "@/components";
import classes from "./page.module.css";

export const metadata = {
  title: "Favorites",
  description: "Favorites page",
};

export default function FavoritePage() {
  return (
    <main className={classes["main-container"]}>
      <Title title="Favorites" />
      <Search placeholder="Search a character..." />
      <FavoriteList />
    </main>
  );
}
