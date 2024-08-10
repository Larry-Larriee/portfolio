import React from "react";

// This component is used to display a list of words for a given header
// Takes a string and object arugment
export default function Option({ title, description }) {
  // creates an array of the object's keys and uses that to query for each description object value
  // (two arrays are being made here)
  let desc = Object.keys(description).map((key) => [key, description[key]]);

  return (
    <section className="flex flex-col gap-2 xl:gap-5">
      <p className="font-league text-3xl">{title}</p>
      <div className="flex flex-col gap-2 xl:gap-3">
        {desc.map((item) => (
          <p key={item[0]} className="font-league text-lg">
            {item[1]}
          </p>
        ))}
      </div>
    </section>
  );
}
