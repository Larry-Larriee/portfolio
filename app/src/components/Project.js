"use client";

import React from "react";
import Link from "next/link";

// This component is used to display a project's title and description
// Takes two string arguments
export default function Project({ title, description, link }) {
  return (
    <div className="flex flex-col gap-5">
      <p className="hover:text-prim-2 font-league text-xl font-medium transition duration-200 ease-in-out hover:translate-x-5 2xl:text-3xl 2xl:font-normal">
        <Link href={link}>{title} →</Link>
      </p>

      <p className="font-league text-xl">{description}</p>
    </div>
  );
}
