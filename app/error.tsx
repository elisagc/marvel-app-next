"use client";

import classes from "@/styles/page.module.css";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}) {
  useEffect(() => {
    console.error(error.message, error);
  }, [error]);

  return (
    <div className={classes["error-container"]}>
      <h2>Something went wrong! {error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
