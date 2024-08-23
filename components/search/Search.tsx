"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import classes from "./Search.module.css";
type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;
export const Search = (props: SearchProps) => {
  const searchParams = useSearchParams();

  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    term ? params.set("search", term) : params.delete("search");
    replace(`/?${params.toString()}`);
  }, 500);

  return (
    <div className={classes["search-container"]}>
      <Image src="/search.svg" alt="Search" width={16} height={16} className={classes.icon} />
      <input
        type="text"
        className={classes.search}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("search")?.toString()}
        {...props}
      />
    </div>
  );
};
