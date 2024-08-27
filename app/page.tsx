import { CharacterList, Loader, Search } from "@/components";
import classes from "@/styles/page.module.css";
import { Suspense } from "react";

interface Params {
  search?: string;
}
interface SearchParams {
  searchParams: Params;
}

export default async function Home({ searchParams }: SearchParams) {
  return (
    <main className={classes["main-container"]}>
      <Search placeholder="Search a character..." />
      <Suspense key={searchParams?.search} fallback={<Loader />}>
        <CharacterList query={searchParams.search} />
      </Suspense>
    </main>
  );
}
