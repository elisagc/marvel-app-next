import classes from "./SearchCounter.module.css";

interface SearchCounterProps {
  results?: number;
}
export const SearchCounter = ({ results }: SearchCounterProps) => {
  return (
    <div className={classes["search-counter-container"]}>
      <span>{results} results</span>
    </div>
  );
};
