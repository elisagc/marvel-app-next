"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import classes from "./Search.module.css";

type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Search = (props: SearchProps) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const { replace } = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>(search);

  useEffect(() => {
    setSearchTerm(search);
  }, [search]);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    term ? params.set("search", term) : params.delete("search");
    replace(`/?${params.toString()}`);
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className={classes["search-container"]}>
      <Image src="/search.svg" alt="Search" width={16} height={16} className={classes.icon} />
      <input type="text" className={classes.search} value={searchTerm} onChange={handleChange} {...props} />
    </div>
  );
};
