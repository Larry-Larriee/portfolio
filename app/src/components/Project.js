"use client";

import React from "react";
import Link from "next/link";

// This component is used to display a project's title and description
// Takes two string arguments
export default function Project({ title, description, link }) {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-league text-3xl transition duration-200 ease-in-out hover:translate-x-5 hover:text-primary-2">
        <Link href={link}>{title} →</Link>
      </p>

      <p className="font-league text-xl">{description}</p>
    </div>
  );
}
