"use client";

import { Comic } from "@/interfaces/Comics";
import { Slider } from "../common/Slider";
import { Title } from "../common/Title";
import { ComicCard } from "./ComicCard";
import classes from "./ComicList.module.css";

interface ComicListProps {
  comics: Comic[];
  title: string;
}

export const ComicList = ({ comics, title }: ComicListProps) => {
  return (
    <div className={classes["wrapper-container"]}>
      <div className={classes["main-container"]}>
        <Title title={title} />

        {!!comics.length && (
          <Slider>
            {comics.map((comic) => (
              <ComicCard key={comic.id} {...comic} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};
