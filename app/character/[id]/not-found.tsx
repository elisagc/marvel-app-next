import classes from "@/styles/page.module.css";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className={classes["not-found-container"]}>
      <h2>Character Not Found</h2>
      <Link href="/">Back to Character List</Link>
    </div>
  );
}
