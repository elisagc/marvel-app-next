"use client";

import { ComicCard, Slider, Title } from "@/components";
import { Comic } from "@/types/Comics";
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
