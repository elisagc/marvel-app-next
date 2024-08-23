import { CharacterList, Loader, Search } from "@/components";
import classes from "@/styles/page.module.css";
import { Suspense } from "react";

interface Params {
  search?: string;
}
interface SearchParams {
  searchParams: Params;
}

export default function Home({ searchParams }: SearchParams) {
  const { search } = searchParams;

  return (
    <main className={classes["main-container"]}>
      <Search placeholder="Search a character..." />
      <Suspense key={search} fallback={<Loader />}>
        <CharacterList query={search} />
      </Suspense>
    </main>
  );
}
