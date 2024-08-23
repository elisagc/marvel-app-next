import { CharacterList, Search } from "@/components";

import { Suspense } from "react";
import { Loader } from "./components/common/Loader";
import classes from "./page.module.css";

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
      <Suspense key={search ?? Math.random()} fallback={<Loader />}>
        <CharacterList query={search} />
      </Suspense>
    </main>
  );
}
