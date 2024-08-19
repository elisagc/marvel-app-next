import Image from "next/image";
import classes from "./Search.module.css";

type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;
export const Search = (props: SearchProps) => {
  return (
    <div className={classes["search-container"]}>
      <Image src="/search.svg" alt="Search" width={16} height={16} className={classes.icon} />
      <input type="text" className={classes.search} {...props} />
    </div>
  );
};
