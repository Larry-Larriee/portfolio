"use client";

import React from "react";

// This component is used to display an image that can be clicked on
// Takes two strings and an image argument
export default function ClickableImage({ link, image, alt }) {
  let openLink = () => {
    window.location.replace(link);
  };

  return (
    // when you pass an image import, it is recieved as an object with properties like width or src
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="max-w-xxxxs transition duration-200 ease-in-out hover:scale-110 hover:cursor-pointer"
      src={image.src}
      alt={alt}
      onClick={openLink}
    />
  );
}
