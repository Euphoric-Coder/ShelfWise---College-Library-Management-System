"use client";

import React from "react";
import { cn } from "@/lib/utils";
// import { IKImage } from "imagekitio-next";
// import config from "@/lib/config";
import BookCoverSVG from "./BookCoverSVG";
import Image from "next/image";


const variantStyles= {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

const BookCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
}) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      <BookCoverSVG coverColor={coverColor} />

      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <Image src={coverImage} alt="Book cover" fill className="rounded-sm object-fill"/>
        {/* <IKImage
          path={coverImage}
          urlEndpoint={config.env.imagekit.urlEndpoint}
          alt="Book cover"
          fill
          className="rounded-sm object-fill"
          loading="lazy"
          lqip={{ active: true }}
        /> */}
      </div>
    </div>
  );
};
export default BookCover;
