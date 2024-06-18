"use client";

import React from "react";

// This component is used to display an image that can be clicked on
// Takes two strings and an image argument
export default function ClickableImage({ link, image, alt }) {
  let imgProperties = Object.keys(image).map((key) => [key, image[key]]);

  let openLink = () => {
    window.location.replace(link);
  };

  // 0: Array [ "src", "/_next/static/media/image.png" ]
  // 1: Array [ "height", 1406 ]
  // 2: Array [ "width", 1969 ]
  // 3: Array [ "blurDataURL", "/_next/image?url=%2F_next%2Fstatic%2Fmedia%image.8296e49c.png&w=8&q=70" ]
  // 4: Array [ "blurWidth", 8 ]
  // 5: Array [ "blurHeight", 6 ]

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="max-w-xxxxs transition duration-200 ease-in-out hover:scale-110 hover:cursor-pointer"
      src={imgProperties[0][1]}
      alt={alt}
      onClick={openLink}
    />
  );
}
