"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// the featured component displays a large featured project with a specific area in the description used as a hyperlink
// title (string) - the title of the project
// image (object) - the image or logo import
// description (string) - the description of the project
// link (string) - the hyperlink
// linkPosition (string) - the string in the description where the hyperlink should go
// bg (string) - the background color of the component
export default function Featured({
  title,
  image,
  description,
  link,
  linkPosition,
  bg,
}) {
  let linkPositionRegex = new RegExp(linkPosition, "g");

  // split method returns an array of strings that were split by the regex. the linkPosition string will
  // always be between desc[0] and desc[1] in the array
  // desc[1] will be an empty string if the linkPosition is at the end
  let desc = description.split(linkPositionRegex);

  let bgRef = useRef();

  // generally, useEffect will run after the elements are rendered. however, things can change if using conditional rendering
  useEffect(() => {
    bgRef.current.classList.add(bg);
  }, [bg]);

  return (
    <>
      <div
        className="w-charlie-custom flex flex-col items-center gap-12 rounded-2xl py-16"
        ref={bgRef}
      >
        <article className="flex w-10/12 items-center gap-16">
          <p className="font-league text-8xl font-bold text-white">{title}</p>
          <Image
            src={image.src}
            alt={`${title} logo`}
            width={500}
            height={500}
            className="w-40"
          />
        </article>

        <p className="w-10/12 font-league text-4xl leading-relaxed text-white">
          {desc[0]}
          <span className="text-prim-3 hover:text-prim-2 transition duration-200 ease-in-out hover:cursor-pointer">
            <Link href={link}>{linkPosition}</Link>
          </span>
          {desc[1]}
        </p>
      </div>
    </>
  );
}
