import Image from "next/image";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const works = [
  {
    artist: "2014",
    art: "/images/history-2014.webp",
  },
  {
    artist: "2015",
    art: "/images/history-2015.webp",
  },
  {
    artist: "2016",
    art: "/images/history-2016.webp",
  },
  {
    artist: "2017",
    art: "/images/history-2017.png",
  },
  {
    artist: "2023",
    art: "/images/history-2023.JPG",
  },
  {
    artist: "2024",
    art: "/images/history-2024.webp",
  },
];

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="">
            <div className="rounded-md overflow-hidden w-[300px] h-[300px] xl:w-[488px] xl:h-[300px] ">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="h-[100%] w-[100%] object-cover rounded-[20px]"
                width={487}
                height={300}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Ongdalsam{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
