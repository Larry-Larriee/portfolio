import React from "react";
import Link from "next/link";
import Image from "next/image";

// the featured component displays a large featured project with a specific area in the description used as a hyperlink
// title (string) - the title of the project
// image (object) - the image or logo import
// description (string) - the description of the project
// link (string) - the hyperlink
// linkPosition (string) - the string in the description where the hyperlink should go
export default function Featured({
  title,
  image,
  description,
  link,
  linkPosition,
}) {
  let linkPositionRegex = new RegExp(linkPosition, "g");

  // split method returns an array of strings that were split by the regex. the linkPosition string will
  // always be between desc[0] and desc[1] in the array
  // desc[1] will be an empty string if the linkPosition is at the end
  let desc = description.split(linkPositionRegex);

  return (
    <>
      <div className="w-charlie-custom flex flex-col items-center gap-12 rounded-2xl bg-primary-2 py-14">
        <article className="flex w-10/12 items-center gap-10">
          <p className="font-league text-9xl font-bold text-white">{title}</p>
          <Image
            src={image.src}
            alt={`${title} logo`}
            width={500}
            height={500}
            className="w-32"
          />
        </article>

        <p className="w-10/12 font-league text-4xl leading-relaxed text-white">
          {desc[0]}
          <span className="text-primary-3 transition duration-200 ease-in-out hover:cursor-pointer hover:text-primary-2">
            <Link href={link}>{linkPosition}</Link>
          </span>
          {desc[1]}
        </p>
      </div>
    </>
  );
}
