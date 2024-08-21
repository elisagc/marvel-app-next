"use client";

import { Title } from "@/components";
import { Comic } from "@/interfaces/Comics";
import { Slider } from "../common/Slider";
import { ComicCard } from "./ComicCard";

interface ComicListProps {
  comics: Comic[];
}

export const ComicList = ({ comics }: ComicListProps) => {
  return (
    <div>
      <Title title="Comics" />
      <Slider>
        {comics.map((comic) => (
          <ComicCard key={comic.id} {...comic} />
        ))}
      </Slider>
    </div>
  );
};
